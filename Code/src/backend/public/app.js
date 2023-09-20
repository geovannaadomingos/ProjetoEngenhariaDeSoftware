const express = require('express');
const app = express();

// Configurando o middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

const routes = require('./rotas/routes');
app.use('/api', routes);

// DB Connection
const conn = require('./db/conn');
conn();

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

module.exports = app;