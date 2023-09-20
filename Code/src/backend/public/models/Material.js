const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    assunto: {
        type: String,
        required: true
    },
    codigoDisciplina: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    },
    periodo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Material', MaterialSchema);