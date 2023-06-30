const express = require('express');
const noticiasSchema = require('../models/noticias');

const router = express.Router();

//insertar un noticias
router.post("/noticias", (req, res) => {
    const noticias = noticiasSchema(req.body);
    noticias
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los noticias
router.get("/noticias", (req, res) => {
    noticiasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un noticias por su id
router.get("/noticias/:id", (req, res) => {
    const { id } = req.params;
    noticiasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar noticias
router.put("/noticias/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, informacion, resumen, galeria, fecha } = req.body;
    noticiasSchema
        .updateOne({ _id: id }, { $set: { titulo, informacion, resumen, galeria, fecha } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un usuario
router.delete("/noticias/:id", (req, res) => {
    const { id } = req.params;
    noticiasSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;