const express = require('express');
const methodOverride = require('method-override');
const laptopRoutes = require('./routes/laptopRoutes');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(router);
app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);

module.exports = app;