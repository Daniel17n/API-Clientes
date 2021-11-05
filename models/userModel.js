const mongoose = require('mongoose');
const { pbkdf2Sync, randomBytes } = require('crypto');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  genre: { type: String, required: true },
  organization: { type: String, default: 'none' },
  salt: { type: String },
});

function hashPassword(next) {
  const user = this;

  this.salt = randomBytes(16).toString('hex');
  user.password = pbkdf2Sync(user.password, this.salt, 1000, 64, 'sha512').toString('hex');
  return next();
}

function checkPassword(npassword) {
  const nnpassword = pbkdf2Sync(npassword, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.password === nnpassword;
}

userSchema.pre('save', hashPassword);
userSchema.methods.checkPassword = checkPassword;

module.exports = mongoose.model('User', userSchema);
