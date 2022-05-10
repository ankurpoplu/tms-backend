const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

require('mongoose-double')(mongoose);

const ApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
      enum: ['Application', 'Kernel', 'OS'],
    },
    version: {
      type: Number,
      default: 0
    },
    base64: {
      type: String
    },
  },

  { timestamps: true }
);

ApplicationSchema.plugin(uniqueValidator);
const FileStore = mongoose.model(
  'Application',
  ApplicationSchema
);

module.exports = FileStore;
