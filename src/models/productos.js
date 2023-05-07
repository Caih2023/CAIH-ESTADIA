const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    existencia: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('productos', productoSchema);