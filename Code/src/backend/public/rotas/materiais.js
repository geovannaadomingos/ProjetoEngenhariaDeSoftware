const express = require('express');
const router = express.Router();
const MaterialController = require('../controllers/materialController');

const multer = require('multer');
const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024,
});
const uploadFile = require('../../db/firebase');


// GET all Materials that matches the filters
router
    .route('/')
    .get((req, res) => MaterialController.getAll(req, res));

// GET one specific Material
router
    .route('/:id')
    .get((req, res) => MaterialController.getOne(req, res));

// POST a new Material
router.post('/', Multer.single('file'), uploadFile, (req, res) => MaterialController.create(req, res));

// DELETE a Material
router
    .route('/:id')
    .delete((req, res) => MaterialController.delete(req, res));

module.exports = router;