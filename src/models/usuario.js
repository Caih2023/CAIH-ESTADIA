const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidoP: {
        type: String,
        required: true
    },
    apellidoM: {
        type: String,
        required: true
    },
    fechaN: {
        type: String,
        required: true
    },
    tituloMEstudios: {
        type: String,
        required: true
    },
    trabajoA: {
        type: String
    },
    proyectoP: {
        type: String,
        required: true
    },
    publicaciones: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('usuarios', usuarioSchema);