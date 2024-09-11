const { MongoClient } = require('mongodb');
const data = require('./alunos');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
	try {
		await client.connect();

		const db = client.db('chamada');
		const collection = db.collection('alunos');
		const resultado = await collection.insertMany(data);
		
		console.log(`${resultado.insertedCount} documentos inseridos!`);
	} finally {
		await client.close();
	}
}

run().catch(console.error);