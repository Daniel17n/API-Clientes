const mongoose = require('mongoose');

const { Schema } = mongoose;
const {pbkdf2Sync, randomBytes} = require('crypto');

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true},
  genre: { type: String, required: true },
  organization: { type: String },
});

module.exports = mongoose.model('User', userSchema);
