const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://meom:1W9cmEHIhY5PDZMA@cluster0.puzlthl.mongodb.net/?retryWrites=true&w=majority');
        console.log('Conectado ao BD');

    } catch (error) {console.log(error)};

    // Local DB Connection for Testing (Não apagar ou descomentar)
    /*
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/ColaboraCIn', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB...'))
        .catch(() => console.error('Could not connect to MongoDB...'));
    */
};

module.exports = main;