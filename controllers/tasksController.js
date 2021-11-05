/* eslint-disable no-console */
const Tasks = require('../models/tasksModel');
const User = require('../models/userModel');

/* function getModel(req, res) {
  res.send('De momento no hay modelos disponibles');
}

function getDB(req, res) {
  res.send('Ostras! Se nos ha olvidado encender la base de datos, espera... [F5]');
} */

function addTasks(req, res) {
  const tasks = new Tasks(req.body);
  let { orgName } = req.body;
  const { userEmail } = req.body;

  User.findOne({ email: userEmail }, (error, user) => {
    if (error) return res.status(404).send({ message: 'No user found', error });
    return user;
  });

  const { organization } = User;

  orgName = organization;

  tasks.save((err, newTasks) => {
    if (err) return res.status(400).send({ message: 'Error saving this tasks', error: err });

    return res.status(200).send(newTasks);
  });
}

function findTasks(req, res) {
  const param = req.body;

  Tasks.find(param, (error, tasks) => {
    if (error) return res.status(404).send({ message: 'No tasks found', error });

    return res.status(200).send(tasks);
  });
}

function changeTasks(req, res) {
  const { taskID } = req.params;
  const tasks = new Tasks(req.body);

  Tasks.findOneAndReplace(taskID, tasks, (err) => {
    if (err) return res.status(404).send({ message: 'No tasks model to replace found', err });
    return res.status(200).send({ message: 'Tasks data replaced', tasks });
  });
}

function deleteTasks(req, res) {
  const { taskID } = req.params;

  Tasks.findByIdAndRemove(taskID, (err, ntasks) => {
    if (err) return res.status(500).send(err);
    if (!ntasks) return res.status(404).send({ message: 'Tasks not found' });
    return res.status(200).send({ message: 'Tasks deleted' });
  });
}

module.exports = {
  /* getDB,
  getModel, */
  addTasks,
  findTasks,
  changeTasks,
  deleteTasks,
};
