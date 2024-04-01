const { MongoClient, ServerApiVersion } = require('mongodb');
const password = 'admin';
const uri = `mongodb+srv://admin:${password}@cluster0.rokvirh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB com sucesso!");
    // Aqui você pode configurar eventuais operações iniciais ou configurações
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

// Exporte a função de conexão e o cliente
module.exports = { connectToMongoDB, client };

// Em outro arquivo, quando iniciar o servidor, chame a função connectToMongoDB
// E use 'client' para realizar operações no banco de dados
