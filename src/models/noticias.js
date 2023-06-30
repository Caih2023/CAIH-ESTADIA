const mongoose = require('mongoose');

const noticiasSchema = mongoose.Schema({
    titulo: {
        type: 'String',
        required: true
    },
    informacion: {
        type: 'String',
        required: true
    },
    resumen: {
        type: 'String',
        required: true
    },
    galeria: {
        type: 'String',
        required: true
    },
    fecha: {
        type: 'Date',
        required: true
    }
})

module.exports = mongoose.model('noticias', noticiasSchema)