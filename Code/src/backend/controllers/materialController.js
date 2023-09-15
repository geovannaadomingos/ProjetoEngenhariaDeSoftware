const MaterialModel = require("../models/Material");
const Material = require('../models/Material');

const MaterialController = {
    create: async (req, res) => {
        try {
            const material = new Material({
                title: req.body.title,
                subject: req.body.subject,
                code: req.body.code,
                teacher: req.body.teacher,
                semester: req.body.semester,
                author: req.body.author});

            const newMaterial = await material.save();
            res.status(201).json(newMaterial);
        }
        catch (e) {res.status(400).json({ message: e.message })};
    },

    delete: async (req, res) => {
        try {
            await Material.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Material has been deleted' });
        }
        catch (e) {res.status(500).json({ message: e.message })};
    },

    getOne: async (req, res) => {
        try {
            const material = await Material.findById(req.params.id);
            if (!material) return res.status(404).json({ message: 'Material not found' })
            else res.status(200).json(material);
        }
        catch (e) {res.status(500).json({ message: e.message })};
    },

    getAll: async (req, res) => {
        try {
            let materials = await Material.findById(req.params.id);
            materials = materials.filter(material => {
                let found = true;
                if (req.query.code && material.code !== req.query.code) found = false
                else if (req.query.teacher && material.teacher !== req.query.teacher) found = false
                else if (req.query.semester && material.semester !== req.query.semester) found = false
                else if (req.query.createdAt && material.createdAt < req.query.createdAt) found = false
                return found;
            });
    
            if (!materials) return res.status(404).json({ message: 'Material not found' })
            else res.status(200).json(materials);
        }
        catch (e) {res.status(500).json({ message: e.message })};
    },
};

module.exports = MaterialController;