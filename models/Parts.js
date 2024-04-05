const {client} = require('../db/conn');

module.exports = class Parts {
    static async findAll(){
        try {
            const parts = await client.db().collection('parts').find().toArray();
            return parts.map(part => ({ ...part, _id: undefined }));
        } catch (error) {
            throw error;
        }
    }
    static async save(part) {
        try {
            const result = await client.db().collection('parts').insertOne(part);
        } catch (error) {
            console.error("Error saving part:", error);
            throw error; 
        }
    }

    static async find(id){
        try {
            const part = await client.db().collection('parts').findOne({id:id});
            delete part._id;
            return part;
        } catch (error) {
            console.error("Error find part:", error);
            throw error;
        }
    }

    static async findOneAndUpdate(part) {
        try {
          return await client.db().collection('parts').updateOne(
            { id: part.id },  
            {
              $set: {
                nomePeca: part.nomePeca,
                marca: part.marca,
                dataAquisicao: part.dataAquisicao,
                quantidade: part.quantidade,
                preco: part.preco,
              },
            },
            { upsert: true } 
          );
        } catch (error) {
          console.error("Error updating part:", error);
          throw error;
        }
      }
      
    static async delete(id){
        try {
            return await client.db().collection('parts').deleteOne({id:id});
        }catch (error) {
            console.error('Erro ao excluir documento:', error);
            throw new Error('Falha na exclusão de documento');
        }     
    }
    
}