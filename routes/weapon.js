const express = require('express');

const weaponController = require('../controllers/weapon');

const router = express.Router();

router.get('/', weaponController.getAllWeapons);

router.post('/', weaponController.postWeapon);

router.put('/', weaponController.updateWeapon);

router.delete('/:id', weaponController.deleteWeapon);

module.exports = router;
