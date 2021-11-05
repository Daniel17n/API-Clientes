const User = require('../models/userModel');
const services = require('../middleware/services');

/* function getModel(req, res) {
  res.send('De momento no hay modelos disponibles');
}

function getDB(req, res) {
  res.send('Ostras! Se nos ha olvidado encender la base de datos, espera... [F5]');
} */

function addUser(req, res) {
  const user = new User(req.body);

  user.save((err, newUser) => {
    if (err) return res.status(400).send({ message: 'Error saving this user', error: err });

    return res.status(200).send({ newUser, token: services.createToken(user) });
  });
}

function findUser(req, res) {
  const { email, password } = req.body;

  User.findOne(email, password, (error, user) => {
    if (error) return res.status(404).send({ message: 'No user found', error });

    return res.status(200).send(user);
  });
}

function changeUser(req, res) {
  const { email } = req.params;
  const user = new User(req.body);

  user.findOneAndReplace(email, user, (err) => {
    if (err) return res.status(404).send({ message: 'No user model to replace found', err });
    return res.status(200).send({ message: 'User data replaced', user });
  });
}

function deleteUser(req, res) {
  const { email } = req.params;
  const user = new User(req.body);
  user.findByIdAndRemove(email, (err, nuser) => {
    if (err) return res.status(500).send(err);
    if (!nuser) return res.status(404).send({ message: 'User not found' });
    return res.status(200).send({ message: 'User deleted' });
  });
}

module.exports = {
  /* getDB,
  getModel, */
  addUser,
  findUser,
  changeUser,
  deleteUser,
};
