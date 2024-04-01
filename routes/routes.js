const express = require('express')
const router = express.Router()

const PartsController = require('../controllers/PartsController')

router.get('/', PartsController.getAllParts);

router.get("/peca/:id", async (req, res) => {

    const id = Number(req.params.id);
    const peca = await Peca.find({ identificador: id });
    res.send(peca);
  
});

router.put("/peca/:id", async (req, res) => {
    const id = Number(req.params.id);
  const peca = await Peca.findOneAndUpdate(
   { identificador: id},
    {
      identificador: req.body.identificador,
      nome: req.body.nome,
      dataAquisicao: req.body.dataAquisicao,
      quantidade: req.body.quantidade,
      valor: req.body.valor,
    },
    { new: true }
  );

  return res.send(peca);
});

router.post("/peca", async (req, res) => {
    const peca = new Peca({
      identificador: req.body.identificador,
      nome: req.body.nome,
      dataAquisicao: req.body.dataAquisicao,
      quantidade: req.body.quantidade,
      valor: req.body.valor,
    });
  
    await peca.save();
    res.send(peca);
});

router.delete("/peca/:id", async (req, res) => {
    const peca = await Peca.findByIdAndDelete(req.params.id);
    res.send(peca);
});

module.exports = router