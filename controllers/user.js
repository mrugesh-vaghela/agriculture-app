const Organization = require("../models").Organization;

module.exports = {
  create(req, res) {
    return Organization.create({
      name: req.body.firstName,
      uuid: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },  
};
