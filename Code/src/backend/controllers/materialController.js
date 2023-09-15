const { Material: MaterialModel } = require("../models/Material");

const MaterialController = {
    create: async (req, res) => {
        try {
            const material = {
                title: req.body.title,
                subject: req.body.subject,
                code: req.body.code,
                teacher: req.body.teacher,
                semester: req.body.semester,
                author: req.body.author
            };

            const response = await MaterialModel.create(material);
            res.status(201).json(response);
        }
        catch (e) {res.status(400).json({ message: e.message })};
    }
};

module.exports = MaterialController;