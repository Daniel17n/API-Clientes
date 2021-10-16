const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  password: { type: String },
  genre: { type: String },
  organization: { type: String },
});

module.exports = mongoose.model('User', userSchema);
