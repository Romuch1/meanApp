const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
}, {
  collection: 'users'
});

userSchema.plugin(uniqueValidator, {
  message: 'Email already in use.'
});
module.exports = mongoose.model('User', userSchema);
