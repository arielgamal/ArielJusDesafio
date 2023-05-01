const express = require('express');
const cors = require('cors');
const { processos } = require("../Processos")

const app = express();
app.use(cors());

app.get('/:value', (req, res) => {
  const value = req.params.value;
    const processoEncontrado = processos
    .filter((processo) => (value.length < 25 ? processo.tribunalOrigem === value.toUpperCase() : processo.cnj === value))
    if (processoEncontrado.length === 0) {
      res.status(404).json({message: "Este número é inválido, não foi encontrado nenhum registro."});
      return;
    }
    
    return res.status(200).json(processoEncontrado);
});


module.exports = app;