const Parts = require('../models/Parts');

module.exports = class PartsController {

    static async getAllParts(req, res) {
      try {
        const parts = await Parts.getParts();
        res.status(200).send(parts);
      } catch (error) {
        // Em caso de erro, envie uma resposta de erro ao cliente
        console.error(error);
        res.status(500).send('Erro ao buscar peças');
      }
    }

    static async save(req, res){
      try{

        if (!req.body.id || !req.body.marca || !req.body.nomePeca || !req.body.dataAquisicao || !req.body.quantidade || !req.body.preco) {
          return res.status(400).send('Dados incompletos ou inválidos');
        }
    
        const part = {
          'id': req.body.id,
          'nome': req.body.nomePeca,
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
      Number(req.params.id)
    } 
  };
  
