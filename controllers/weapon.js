const Weapon = require('../models/weapon');

exports.getAllWeapons = (req, res, next) => {
  res.send(Weapon.fetchAll());
};
