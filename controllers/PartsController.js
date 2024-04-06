const Parts = require('../models/Parts');

module.exports = class PartsController {

    static async getAllParts(req, res) {
      try {
        const parts = await Parts.findAll();
        res.status(200).send(parts);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar peças');
      }
    }

    static async save(req, res){
      try{  
        const part = {
          'id': req.body.id,
          'nomePeca': req.body.nomePeca,
          'marca': req.body.marca,
          'dataAquisicao': req.body.dataAquisicao,
          'quantidade': req.body.quantidade,
          'preco': req.body.preco,
        };
    
        await Parts.save(part);
        res.status(200);
    
      } catch(error) {

        console.error(`Erro ao salvar peça: ${error.message}`, error);
        res.status(500).send(`Erro interno ao salvar peça: ${error.message}`);
        
      }
    }   

    static async find(req, res){
      try {

        const id = req.params.id;

        const part = await Parts.find(id);

        return res.status(200).send(part);

      } catch (error) {
        console.error(error);
        return res.status(404);
      }
    }
    
    static async update(req, res){
      try {
        const newPart = {
          'id': req.body.id,
          'nomePeca': req.body.nomePeca,
          'marca': req.body.marca,
          'dataAquisicao': req.body.dataAquisicao,
          'quantidade': req.body.quantidade,
          'preco': req.body.preco,
        };
  
        const part = await Parts.findOneAndUpdate(newPart);

        res.send(part);

      } catch (error) {
        res.status(error.statusCode);
      }
    }

    static async delete(req, res) {
      try {
        const peca = await Parts.delete(req.params.id);
        res.send(peca);  
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
      }
    }
  };
  
