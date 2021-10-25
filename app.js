const express = require('express');

const userRoutes = require('./routes/userRoutes');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);

module.exports = app;
