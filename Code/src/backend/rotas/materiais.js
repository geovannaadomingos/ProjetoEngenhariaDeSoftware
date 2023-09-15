const express = require('express');
const router = express.Router();
const MaterialController = require('../controllers/materialController');


// GET all Materials that matches the filters
router
    .route('/')
    .get((req, res) => MaterialController.getAll(req, res));

// GET one specific Material
router
    .route('/:id')
    .get((req, res) => MaterialController.getOne(req, res));

// POST a new Material
router
    .route('/')
    .post((req, res) => MaterialController.create(req, res));

// DELETE a Material
router
    .route('/:id')
    .delete((req, res) => MaterialController.delete(req, res));

module.exports = router;