const express = require('express');
const app = express();

app.use(express.json());

const routes = require('./rotas/routes');
app.use('/api', routes);

module.exports = app;