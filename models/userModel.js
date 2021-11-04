const mongoose = require('mongoose');
const { pbkdf2Sync, randomBytes } = require('crypto');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  genre: { type: String, required: true },
  organization: { type: String },
});

function hash(password) {
  this.salt = randomBytes(16).toString('hex');
  this.password = pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
}
userSchema.pre('save', hash);

module.exports = mongoose.model('User', userSchema);
