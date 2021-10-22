const express = require('express');
<<<<<<< HEAD
const userRoutes = require('./routes/userRoutes');
const tasksRoutes = require('./routes/tasksRoutes');
=======
const methodOverride = require('method-override');

const userRoutes = require('./routes/laptopRoutes');
const tasksRoutes =require('./routes/tasksRoutes')
>>>>>>> e2c704f92c36b2f69704b25d83e613332bd3450e

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRoutes);
app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);

module.exports = app;
