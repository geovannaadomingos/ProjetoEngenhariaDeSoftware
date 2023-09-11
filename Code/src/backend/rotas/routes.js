const express = require('express');
const router = express.Router();

const materialsRouter = require('./materiais');
const homeRouter = require('./home');

router.use('/materiais', materialsRouter);
router.use('/', homeRouter);

module.exports = router;