const router = require('express').Router();

const itemController = require('../controllers/itemController.js');

router.get('/game', itemController.getGame);
router.get('/systemGames', itemController.getGamesForSystem);


module.exports = router;