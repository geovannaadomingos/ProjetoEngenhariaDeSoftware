const Material = require('../models/Material');

const MaterialController = {
    create: async (req, res) => {
        try {
            const material = new Material({
                titulo: req.body.titulo,
                assunto: req.body.assunto,
                codigoDisciplina: req.body.codigoDisciplina,
                professor: req.body.professor,
                periodo: req.body.periodo,
                autor: req.body.autor,
                curso: req.body.curso,
                url: req.file ? req.file.fileUrl : ""
            });

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
            let materials = await Material.find();

            materials = materials.filter(material => {
                let found = true;
                if (req.query.codigoDisciplina && material.codigoDisciplina !== req.query.codigoDisciplina) found = false
                else if (req.query.professor && material.professor !== req.query.professor) found = false
                else if (req.query.periodo && material.periodo !== req.query.periodo) found = false
                else if (req.query.createdAt && material.createdAt < req.query.createdAt) found = false
                else if (req.query.curso && material.curso !== req.query.curso) found = false
                return found;
            });
    
            if (!materials) return res.status(404).json({ message: 'Material not found' })
            else res.status(200).json(materials);
        }
        catch (e) {res.status(500).json({ message: e.message })};
    }
};

module.exports = MaterialController;