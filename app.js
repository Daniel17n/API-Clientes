const express = require('express');
const methodOverride = require('method-override');

const userRoutes = require('./routes/laptopRoutes');
const tasksRoutes =require('./routes/tasksRoutes')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(userRoutes);
app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);

module.exports = app;
