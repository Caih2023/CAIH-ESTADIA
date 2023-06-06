const express = require('express');
const recorridosVirtualesSchema = require('../models/recorridosVirtuales');

const router = express.Router();

//insertar un recorridos
router.post("acerca", (req, res) => {
    const recorridos = recorridosVirtualesSchema(req.body);
    recorridos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los recorridos
router.get("acerca", (req, res) => {
    recorridosVirtualesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un recorrido por su id
router.get("/acerca/:id", (req, res) => {
    const { id } = req.params;
    recorridosVirtualesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar recorrido
router.put("/acerca/:id", (req, res) => {
    const { id } = req.params;
    const { tituloPoint, informacionH, coordenadas, galeria, autorPointer } = req.body;
    recorridosVirtualesSchema
        .updateOne({ _id: id }, { $set: { tituloPoint, informacionH, coordenadas, galeria, autorPointer } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un recorrido
router.delete("/acerca/:id", (req, res) => {
    const { id } = req.params;
    recorridosVirtualesSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;