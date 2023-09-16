const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// configurando o caminho onde os arquivos serão salvos
module.exports = {
    dest: path.resolve(__dirname, "..", ".." ,"tmp","uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,path.resolve(__dirname, "..", "..", "tmp","uploads"));
        },
        // função para gerar nome do arquivo de forma aleatória e única para evitar sobrescrita de arquivos com mesmo nome
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
         },
    }),
    limits: {
        // tamanho máximo do arquivo
        fileSize: 2 * 1024 * 1024,
    },

     // filtro de arquivos que serão aceitos no upload
    FileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
            'text/plain',
            'text/csv',
            'application/pdf'
        ];
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else {
            cb(new Error('Formato de arquivo inválido.'));
        }
    },
};
