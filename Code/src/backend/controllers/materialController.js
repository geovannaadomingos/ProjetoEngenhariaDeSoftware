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
                author: req.body.author,
                fileUrl: null
            });

            let newMaterial = await material.save();

            // Adicionar aqui a função para fazer o upload do arquivo no outro banco de dados
            // Usar o newMaterial._id para criar o nome e path do arquivo

            // Atualizar o newMaterial.fileUrl com o caminho onde o arquivo foi salvo
            newMaterial.fileUrl = "http://localhost:3000/files/" + newMaterial._id;
            newMaterial = await newMaterial.save();

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

    // Função para pegar os arquivos de um material
    // Usar o req.params.id para formar o path onde o arquivo foi salvo
    getFiles: async (req, res) => {}
};

module.exports = MaterialController;