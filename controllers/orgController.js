const Orgs = require('../models/orgModel');

function addOrg(req, res) {
  const org = new Orgs(req.body);

  org.save((err, newOrg) => {
    if (err) return res.status(400).send({ message: 'Error saving this organization', error: err });

    return res.status(200).send(newOrg);
  });
}

function findOrg(req, res) {
  const { name } = req.body;

  Orgs.findOne(name, (error, org) => {
    if (error) return res.status(404).send({ message: 'No organization found', error });

    return res.status(200).send(org);
  });
}

function updateOrg(req, res) {
  const { name } = req.params.name_id;
  const org = new Orgs(req.body);

  org.findOneAndReplace(name, org, (err) => {
    if (err) return res.status(404).send({ message: 'No user model to replace found', err });
    return res.status(200).send({ message: 'Organization data replaced', org });
  });
}

function deleteOrg(req, res) {
  const { name } = req.params;
  Orgs.findByIdAndRemove(name, (err, nOrg) => {
    if (err) return res.status(500).send(err);
    if (!nOrg) return res.status(404).send({ message: 'User not found' });
    return res.status(200).send({ message: 'Organization deleted' });
  });
}

module.exports = {
  addOrg,
  findOrg,
  updateOrg,
  deleteOrg,
};
