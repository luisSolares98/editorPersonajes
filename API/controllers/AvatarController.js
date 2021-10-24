var conector = require('../mySql/mySql');
var objAvatar = require('../models/Avatar');
const itemController = require('./ItemController');
var avatarController = {
    selectAll: function(req, res) {
        var query = 'call sp_avatar_selectAll()';
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                objAvatar = datos[0];
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    avatares: objAvatar
                });
            }
        });
    },
    selectById: function(req, res) {
        var avatarId = req.params.avatarId;
        var query = `call sp_avatar_selectById( ${avatarId} )`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                objAvatar = datos[0][0];
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    avatar: objAvatar
                });
            }
        });
    },

    selectByUsuarioId: function(req, res) {
        var usuarioId = req.params.usuarioId;
        var query = `call sp_avatar_selectAllxUsuario( ${usuarioId} )`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                objAvatar = datos[0];
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    avatares: objAvatar
                });
            }
        });
    },
    insert: function(req, res) {
        const body = req.body;
        const nombre = body.nombre;
        const usuarioId = body.usuarioId;
        const listItem = body.listItem;
        var query = `call sp_avatar_insert( '${nombre}' , ${usuarioId} )`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                objAvatar = datos[0][0];
                listItem.forEach(item => {
                    const bandera = itemController.insert(objAvatar.id, item._id || item.id);
                    if (bandera) {
                        console.log(bandera);
                    }
                });
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    avatar: datos[0][0]
                });
            }
        });
    },
    delete: function(req, res) {
        var avatarId = req.params.avatarId;
        var query = `call sp_avatar_delete(${avatarId})`;
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
                    mensaje: "se realizo con exito la consulta"
                });
            }
        });
    }
};
module.exports = avatarController;