const express = require('express');
const reportesCivicosSchema = require('../models/reportesCivicos');

const router = express.Router();

//insertar un reportes
router.post("/reportes", (req, res) => {
    const reportes = reportesCivicosSchema(req.body);
    reportes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los reportes
router.get("/reportes", (req, res) => {
    reportesCivicosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un reportes por su id
router.get("/reportes/:id", (req, res) => {
    const { id } = req.params;
    reportesCivicosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar reportes
router.put("/reportes/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, foto, coordenadas } = req.body;
    reportesCivicosSchema
        .updateOne({ _id: id }, { $set: { titulo, descripcion, foto, coordenadas } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un reportes
router.delete("/reportes/:id", (req, res) => {
    const { id } = req.params;
    reportesCivicosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;