const express = require('express')
const router = express.Router()

const PartsController = require('../controllers/PartsController')

router.get("/peca", PartsController.getAllParts);

router.get("/peca/:id", PartsController.find);

router.put("/peca/:id", PartsController.update);

router.post("/peca", PartsController.save);

router.delete("/peca/:id", async (req, res) => {
    const peca = await Peca.findByIdAndDelete(req.params.id);
    res.send(peca);
});

module.exports = router