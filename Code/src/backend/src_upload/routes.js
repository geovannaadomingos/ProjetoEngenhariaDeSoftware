const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');


// trocar multer().single por multer().array para enviar vários arquivos
routes.post('/posts', multer().single( 'file'),(req, res) => {
    console.log(req.file);
    
    return res.json({ hello: 'Hellooooo' });
});

module.exports = routes;
