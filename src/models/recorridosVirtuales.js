const mongoose = require('mongoose');

const recorridosVirtualesSchema = mongoose.Schema({
    tituloPoint: {
        type: String,
        required: true
    },
    informacionH: {
        type: String,
        required: true
    },
    coordenadas: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    galeria: {
        type: String,
        required: true
    },
    autorPointer: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('recorridos', recorridosVirtualesSchema);