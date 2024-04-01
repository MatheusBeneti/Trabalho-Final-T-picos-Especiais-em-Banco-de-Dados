const Parts = require('../models/Parts');

module.exports = class PartsController {

    static async getAllParts(req, res) {
      try {
        res.send(Parts.getParts());
      } catch (error) {
        // Em caso de erro, envie uma resposta de erro ao cliente
        console.error(error);
        res.status(500).send('Erro ao buscar peças');
      }
    }

    static async save(req, res){
      try{

        if (!req.body.identificador || !req.body.nome || !req.body.dataAquisicao || !req.body.quantidade || !req.body.valor) {
          return res.status(400).send('Dados incompletos ou inválidos');
        }
    
        const part = {
          'identificador': req.body.identificador,
          'nome': req.body.nome,
          'dataAquisicao': req.body.dataAquisicao,
          'quantidade': req.body.quantidade,
          'valor': req.body.valor,
        };
    

        await Parts.save(part);
        res.status(200).send('Peça salva com sucesso');
    
      } catch(error) {

        console.error(`Erro ao salvar peça: ${error.message}`, error);
        res.status(500).send(`Erro interno ao salvar peça: ${error.message}`);
      }
    }    
  };
  
