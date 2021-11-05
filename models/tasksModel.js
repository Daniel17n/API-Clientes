const mongoose = require('mongoose');

const { Schema } = mongoose;

const tasksSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  etiquette: { type: String, required: true },
  priority: { type: String, enum: ['high', 'low'], required: true },
  start: { type: String, required: true },
  deadline: { type: String, required: true },
  orgName: { type: String, default: 'none' },
  userEmail: { type: String, required: true },
});

module.exports = mongoose.model('Tasks', tasksSchema);
