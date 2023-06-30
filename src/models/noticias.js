const mongoose = require('mongoose');

const noticiasSchema = mongoose.Schema({
    titulo: {
        type: 'string',
        required: true
    },
    informacion: {
        type: 'string',
        required: true
    },
    resumen: {
        type: 'string',
        required: true
    },
    galeria: {
        type: 'string',
        required: true
    },
    fecha: {
        type: 'date',
        required: true
    }
})

module.exports = mongoose.model('noticias', noticiasSchema)