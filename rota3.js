const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/seu-banco-de-dados', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao banco de dados:'));
db.once('open', () => {
    console.log('Conectado ao banco de dados');
});


const exemploSchema = new mongoose.Schema({
    campo1: String,
    campo2: Number
});

const Exemplo = mongoose.model('Exemplo', exemploSchema);

app.get('/dados', async (req, res) => {
    try {

        const dados = await Exemplo.find();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});