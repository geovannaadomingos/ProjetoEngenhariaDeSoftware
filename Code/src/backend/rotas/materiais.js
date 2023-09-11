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

// GET one Material especific with filters applied
router.get('/:id', async (req, res) => {
    try {
        let materials = await Material.findById(req.params.id);
        if (!materials) return res.status(404).json({ message: 'Material not found' })
        else {
            materials = materials.filter(material => {
                let found = true;
                if (req.query.code && material.code !== req.query.code) found = false
                else if (req.query.teacher && material.teacher !== req.query.teacher) found = false;
                else if (req.query.semester && material.semester !== req.query.semester) found = false;
                else if (req.query.createdAt && material.createdAt < req.query.createdAt) found = false;
                return found;
            });
            res.status(200).json(materials);
        };
    }
    catch (e) {res.status(500).json({ message: e.message })};
});