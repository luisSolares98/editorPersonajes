var conector = require('../mySql/mySql');
var objUsuario = require('../models/Usuario');
const { json } = require('body-parser');

var itemController = {
    insert: function(avatarId, itemId) {
        const query = `CALL sp_item_avatar_insert(${avatarId} , ${itemId})`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                return false;
            } else {
                return true;
            }
        });
    },
    selectAll: function(req, res) {
        const query = `CALL sp_item_selectAll()`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    items: datos[0]
                });
            }
        });
    },
    selectItemXavatar: function(req, res) {
        var avatarId = req.params.avatarId;
        const query = `CALL sp_item_avatar_selectAllxAvatarId(${avatarId})`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    items: datos[0]
                });
            }
        });
    },
    update: function(req, res) {
        const body = req.body;
        const usuarioId = body.usuarioId;
        const avatarId = body.avatarId;
        const listItem = body.listItem;
        const query = `CALL sp_item_avatar_delete(${avatarId})`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                listItem.forEach(item => {
                    const bandera = itemController.insert(avatarId, item._id || item.id);
                    if (bandera) {
                        console.log(bandera);
                    }
                });
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta"
                });
            }
        });
    }
};
module.exports = itemController;