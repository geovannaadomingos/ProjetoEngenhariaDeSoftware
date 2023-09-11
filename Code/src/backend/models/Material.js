const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Material', MaterialSchema);