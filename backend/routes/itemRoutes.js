const router = require('express').Router();

const itemController = require('../controllers/itemController.js');

router.get('/game', itemController.getGame);

module.exports = router;