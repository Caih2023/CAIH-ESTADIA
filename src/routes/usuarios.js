const express = require('express');
const usuariosSchema = require('../models/usuario');

const router = express.Router();

//insertar un usuarios
router.post("/usuarios", (req, res) => {
    const usuario = usuariosSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los usuarios
router.get("/usuarios", (req, res) => {
    usuariosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un usuarios por su id
router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuariosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar usuarios
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellidoP, apellidoM, fechaN, tituloMEstudios, trabajoA, proyectoP, publicaciones, imagen, usuario, contraseña, roles } = req.body;
    usuariosSchema
        .updateOne({ _id: id }, { $set: { nombre, apellidoP, apellidoM, fechaN, tituloMEstudios, trabajoA, proyectoP, publicaciones, imagen, usuario, contraseña, roles } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un usuario
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuariosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;