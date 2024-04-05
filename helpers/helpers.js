function validateRequestForm(req){
    if (!req.body.id || !req.body.marca || !req.body.nomePeca || !req.body.dataAquisicao || !req.body.quantidade || !req.body.preco) {
        return res.status(400).send('Dados incompletos ou inválidos');
    }

      const newPart = {
        'id': req.body.id,
        'nome': req.body.nomePeca,
        'marca': req.body.marca,
        'dataAquisicao': req.body.dataAquisicao,
        'quantidade': req.body.quantidade,
        'preco': req.body.preco,
      };
}