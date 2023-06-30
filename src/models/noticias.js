const mongoose = require('mongoose');
const moment = require('moment');

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
});

noticiasSchema.pre('save', function (next) {
    if (this.fecha && typeof this.fecha === 'string') {
        this.fecha = moment(this.fecha, 'DD/MM/YYYY').toDate();
    }
    next();
});

module.exports = mongoose.model('noticias', noticiasSchema)