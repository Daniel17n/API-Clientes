const mongoose = require('mongoose');

const { Schema } = mongoose;

const tasksSchema = new Schema({
  taskID: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  etiquette: { type: String, required: true },
  priority: { type: String, required: true },
  start: { type: String, required: true },
  deadline: { type: String, required: true },
});

module.exports = mongoose.model('Tasks', tasksSchema);
