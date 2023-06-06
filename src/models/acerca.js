const mongoose = require('mongoose');

const acercaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fondo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('acercas', acercaSchema);