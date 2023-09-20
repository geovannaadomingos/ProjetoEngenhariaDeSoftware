const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Conecte-se ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Defina o esquema para os arquivos
const arquivoSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  conteudo: Buffer,
});

const Arquivo = mongoose.model('Arquivo', arquivoSchema);

// Configuração do Multer para upload de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static('public')); // Servir arquivos estáticos, como imagens

// Rota para fazer upload de um arquivo
app.post('/upload', upload.single('arquivo'), async (req, res) => {
  try {
    const nomeArquivo = req.file.originalname;
    const tipoArquivo = req.file.mimetype;
    const conteudoArquivo = req.file.buffer;

    // Crie um novo documento de arquivo no MongoDB
    const novoArquivo = new Arquivo({
      nome: nomeArquivo,
      tipo: tipoArquivo,
      conteudo: conteudoArquivo,
    });

    await novoArquivo.save();

    res.status(200).json({ message: 'Arquivo enviado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao fazer upload do arquivo' });
  }
});

// Rota para baixar um arquivo por ID
app.get('/download/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const arquivo = await Arquivo.findById(id);

    if (!arquivo) {
      res.status(404).json({ error: 'Arquivo não encontrado' });
      return;
    }

    res.setHeader('Content-Disposition', `attachment; filename="${arquivo.nome}"`);
    res.setHeader('Content-Type', arquivo.tipo);
    res.send(arquivo.conteudo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o arquivo' });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});