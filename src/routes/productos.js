const express = require('express');
const productoSchema = require('../models/productos');

const router = express.Router();

//insertar un producto
router.post("/productos", (req, res) => {
    const producto = productoSchema(req.body);
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Obtener todos los productos
router.get("/productos", (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener solo un producto por su id
router.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar productos
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, precio, imagen, descripcion, existencias } = req.body;
    productoSchema
        .updateOne({ _id: id }, { $set: { nombre, precio, imagen, descripcion, existencias } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un producto
router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Decrementar Existencias en 1 unidad
router.put("/productos/:id/decrement", (req, res) => {
    const { id } = req.params;
    productoSchema
        .findByIdAndUpdate(id, { $inc: { existencia: -1 } })
        .then(() => {
            productoSchema.findById(id).then((data) => res.json(data));
        })
        .catch((error) => res.json({ message: error }));
});


module.exports = router;