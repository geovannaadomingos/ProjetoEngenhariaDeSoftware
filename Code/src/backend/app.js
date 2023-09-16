const express = require('express');
const app = express();

app.use(express.json());

const routes = require('./rotas/routes');
app.use('/api', routes);

// DB Connection
const conn = require('./db/conn');
conn();

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

module.exports = app;

// Test