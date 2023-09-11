const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// GET homepage with some materials
router.get('/', async (req, res) => {
    try {
        const materials = await Material.find().limit(18);
        res.json(materials);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});

module.exports = router;