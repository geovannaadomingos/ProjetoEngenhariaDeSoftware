const { v4: uuidv4 } = require('uuid');

const admin = require("firebase-admin");
const serviceAccount = require("../firebase-key.json");

const BUCKET = "colaboracin-6598b.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

const uploadFile = (req, res, next) => {
  if (!req.file) return next();

  const arquivo = req.file;
  const nomeArquivo = uuidv4() + '.' + arquivo.originalname.split('.').pop();

  const file = bucket.file(nomeArquivo);
  const stream = file.createWriteStream({
    metadata: {
      contentType: arquivo.mimetype
    }
  });

  stream.on('error', (e) => {
    console.log(e);
  });

  stream.on('finish', async () => {
    await file.makePublic();
    req.file.fileUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

    next();
  });

  stream.end(arquivo.buffer);
};

module.exports = uploadFile;