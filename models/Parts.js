const { client } = require('../db/conn');

module.exports = class Parts {
    static async findAll() {
        try {
            const parts = await client.db().collection('parts').find().toArray();
            return parts.map(part => {
                const { _id, ...partWithoutId } = part;
                return partWithoutId;
            });
        } catch (error) {
            throw error;
        }
    }

    static async save(part) {
        try {
            const result = await client.db().collection('parts').insertOne(part);
            console.log("Part saved successfully:", result);
            return result.insertedId;
        } catch (error) {
            console.error("Error saving part:", error);
            throw error;
        }
    }

    static async find(id) {
        try {
            const part = await client.db().collection('parts').findOne({ id: id });
            const { _id, ...partWithoutId } = part;
            return partWithoutId;
        } catch (error) {
            console.error("Error finding part:", error);
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

    static async delete(id) {
        try {
            return await client.db().collection('parts').deleteOne({ id: id });
        } catch (error) {
            console.error('Error deleting document:', error);
            throw new Error('Failed to delete document');
        }
    }
}
