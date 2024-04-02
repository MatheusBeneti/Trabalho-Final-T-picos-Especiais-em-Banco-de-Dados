const {client} = require('../db/conn');

module.exports = class Parts {
    static async getParts(){
        const parts = await client.db().collection('parts').find().toArray();
        return parts;
    }
    static async save(part) {
        try {
            const result = await client.db().collection('parts').insertOne(part);
            console.log("Part saved:", result);
        } catch (error) {
            console.error("Error saving part:", error);
            throw error; // Você pode optar por relançar o erro para tratá-lo em outro lugar
        }
    }
    
}