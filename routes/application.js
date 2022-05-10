const express = require('express');
const router = express.Router();
const fs = require('fs');
//  Get file  by giving id in request.
const application = require('../services/Application');

router.get('/getFileById/:id', (req, res) => {
  fileStore.getApplicationById(req.params.id)
    .then(status => {
      res.json(status);
    })
    .catch(err => {
      res.status(err.statusCode).json(err.errorDetails);
    });
});

//Create or upload file in filestore by giving type,file in request.
router.post('/upload', async (req, res) => {
  const type = req.body.type;
  let file;

  if (req.files) {
    file = req.files.file;
  }

  application.createApplication(file, type)
    .then(status => {
      res.json(status);
    })
    .catch(err => {
      res.status(err.statusCode).json(err.errorDetails);
    });
});

//Get all filestore data.
router.get('/getAllApplication', (req, res) => {

  application.getAllApplication()
    .then(status => {
      res.json(status);
    })
    .catch(err => {
      res.status(err.statusCode).json(err.errorDetails);
    });
});
// delete file  by giving id in request.
router.delete('/deleteById', (req, res) => {
  application.deleteFileById(req.body.id)
    .then(status => {
      res.json(status);
    })
    .catch(err => {
      res.status(err.statusCode).json(err.errorDetails);
    });
});

// update file details from file store  by giving id in request.
router.put('/update/:id', async (req, res) => {
  let file;
  if (req.files) {
    file = req.files.file;
  }

  application.update(req.params.id, file)

    .then(status => {
      res.json(status);

    })
    .catch(err => {
      res.status(err.statusCode).json(err.errorDetails);
    });
});


// Get Application by giving id in request.
router.get('/getApplication/:id', (req, res) => {
  application.getApplicationById(req.params.id)
    .then(status => {
      res.json(status);
    })
    .catch(err => {
      res.status(err.statusCode).json(err.errorDetails);
    });
});

module.exports = router;