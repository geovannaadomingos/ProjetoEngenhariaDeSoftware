const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://meom:1W9cmEHIhY5PDZMA@cluster0.puzlthl.mongodb.net/?retryWrites=true&w=majority');
        console.log('Conectado ao BD');

    } catch (error) {console.log(error)};
}

module.exports = main;