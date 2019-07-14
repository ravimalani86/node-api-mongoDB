const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      emailID: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      password: {
        type: String
      },
      c_password: {
        type: String
      },
      gender: {
        type: String
      },
      applyAs: {
        type: String
      },
      securityQuestion: {
        type: String
      },
      securityAnswer: {
        type: String
      }
});

module.exports = mongoose.model('User', UserSchema);