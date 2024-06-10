const express = require('express')
const router = express.Router()

const PartsController = require('../controllers/PartsController')

router.get("/", (req, res) => {
    res.send("Rodando");
});

router.get("/peca", PartsController.getAllParts);

router.get("/peca/:id", PartsController.find);

router.put("/peca/:id", PartsController.update);

router.post("/peca", PartsController.save);

router.delete("/peca/:id", PartsController.delete);

module.exports = router