var express = require('express');
var itemController = require('../controllers/ItemController');

var itemRouter = express.Router();
itemRouter.get('/item', itemController.selectAll);
itemRouter.get('/item/:avatarId', itemController.selectItemXavatar);
itemRouter.put('/item', itemController.update);

module.exports = itemRouter;