const express = require('express');
const acercasSchema = require('../models/acerca');

const router = express.Router();

//insertar un recorridos
router.post("/acercas", (req, res) => {
    const acercas = acercasSchema(req.body);
    acercas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los recorridos
router.get("/acercas", (req, res) => {
    acercasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un recorrido por su id
router.get("/acercas/:id", (req, res) => {
    const { id } = req.params;
    acercasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar recorrido
router.put("/acercas/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fondo } = req.body;
    acercasSchema
        .updateOne({ _id: id }, { $set: { titulo, descripcion, fondo } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un recorrido
router.delete("/acercas/:id", (req, res) => {
    const { id } = req.params;
    acercasSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;