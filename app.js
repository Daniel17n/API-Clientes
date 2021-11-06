const express = require('express');

const userRoutes = require('./routes/userRoutes');
const tasksRoutes = require('./routes/tasksRoutes');
const orgRoutes = require('./routes/orgRoutes');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);
app.use('/org', orgRoutes);

module.exports = app;
