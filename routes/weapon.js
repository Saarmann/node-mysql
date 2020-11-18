const express = require('express');

const weaponController = require('../controllers/weapon');

const router = express.Router();

router.get('/', weaponController.getAllWeapons);

module.exports = router;
