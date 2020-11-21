const Weapon = require('../models/weapon');

exports.getAllWeapons = async (req, res, next) => {
  try {
    const [allWeapons] = await Weapon.fetchAll();
    res.status(200).json(allWeapons);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(err);
  }
};
