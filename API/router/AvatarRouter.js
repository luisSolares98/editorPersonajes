var express = require('express');
var avatarController = require('../controllers/AvatarController');

var avatarRouter = express.Router();
avatarRouter.post('/avatar', avatarController.insert);
avatarRouter.get('/avatar', avatarController.selectAll);
avatarRouter.get('/avatar/:avatarId', avatarController.selectById);
avatarRouter.get('/avatar/usuario/:usuarioId', avatarController.selectByUsuarioId);
avatarRouter.delete('/avatar/:avatarId', avatarController.delete);

module.exports = avatarRouter;