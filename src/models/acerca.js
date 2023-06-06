const mongoose = require('mongoose');

const acercasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
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

module.exports = mongoose.model('acercas', acercasSchema);