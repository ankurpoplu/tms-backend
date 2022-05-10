const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const databaseConnect = require('./database/database');
const api = require('./utils/api/api');
const tmsCallApi = require('./utils/api/tmsCall');
const keycloak = require('./keycloak-config').initKeycloak();
const app = express();
const decoder = require('jwt-decode');
const { LOGS } = require("./constants/index");
const fileUpload = require('express-fileupload')
//connect to db
databaseConnect();

app.use(fileUpload({
  createParentPath: true, immediate: true,
  highWaterMark: 100 * 1024 * 1024,
  uploadTimeout: 30 * 60 * 1000,
  limits: {
    fileSize: 2 * 1024 * 1024 * 1024,
  }
}));
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: [process.env.URL] }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//middleware

app.use(function (req, res, next) {

  if (req.url.includes('portal')) {
    if (process.env.AUTHORIZATION.toLocaleLowerCase() === 'true') {
      if (!req.headers.authorization) {
        return res.sendStatus(401).json({ err: 'Unauthorized!' });
      }
      app.use(keycloak.middleware());
      api.routes.forEach(x => (
        app.use(x.route, keycloak.protect(), x.controller)
      ));
      const decoded = decoder(req.headers.authorization);
      const userName = decoded.preferred_username;
      req.userInfo = { name: userName };
    } else {
      api.routes.forEach(x => (
        app.use(x.route, x.controller)
      ))
      const userName = LOGS.USER;
      req.userInfo = { name: userName };
    }
  } else {
    tmsCallApi.routes.forEach(x => app.use(x.route, x.controller));
  }
  next();
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error =
    req.app.get('env') === 'development'
      ? err
      : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
