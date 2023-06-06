const express = require('express');
const acercaSchema = require('../models/acerca');

const router = express.Router();

//insertar un recorridos
router.post("acerca", (req, res) => {
    const acerca = acercaSchema(req.body);
    acerca
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los recorridos
router.get("acerca", (req, res) => {
    acercaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un recorrido por su id
router.get("/acerca/:id", (req, res) => {
    const { id } = req.params;
    acercaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar recorrido
router.put("/acerca/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fondo } = req.body;
    acercaSchema
        .updateOne({ _id: id }, { $set: { titulo, descripcion, fondo } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un recorrido
router.delete("/acerca/:id", (req, res) => {
    const { id } = req.params;
    acercaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;