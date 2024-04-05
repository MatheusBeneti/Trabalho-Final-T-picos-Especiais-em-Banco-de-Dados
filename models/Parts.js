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

    static async findOneAndUpdate(part){
        try {
            
        } catch (error) {
            console.error("Error updating part:", error);
            throw error;
        }
    }
    
}