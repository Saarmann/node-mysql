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

exports.postWeapon = async (req, res, next) => {
  try {
    const postResponse = await Weapon.post(req.body.item);
    res.status(201).json(postResponse);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(err);
  }
};

exports.updateWeapon = async (req, res, next) => {
  try {
    const updateResponse = await Weapon.update(req.body.id, req.body.item);
    res.status(200).json(updateResponse);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteWeapon = async (req, res, next) => {
  try {
    const deleteResponse = await Weapon.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(err);
  }
};
