
const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://andersonmatheus:o6jZerWEwh0ZWAsg@cluster0gerenciamento.ejll0ge.mongodb.net/annotations?retryWrites=true&w=majority&appName=Cluster0gerenciamento";

mongoose.connect(dbConfig, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://andersonmatheus:o6jZerWEwh0ZWAsg@cluster0gerenciamento.ejll0ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0gerenciamento";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Efetuou ping em sua implantação. Você se conectou com sucesso ao MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


