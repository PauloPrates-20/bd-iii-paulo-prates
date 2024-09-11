const { MongoClient } = require('mongodb');
const data = require('../lista-chamada/alunos');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
	try {
		await client.connect();

		const db = client.db('chamada');
		const collection = db.collection('alunos');
		// const resultado = await collection.insertMany(data);
		
		// console.log(`${resultado.insertedCount} documentos inseridos!`);

		await collection.updateOne({ nome: "Alexandro" }, { $set: {"apelido": "Choquei da Camargo" } });

		const alunos = await collection.find().toArray();
		for (const aluno of alunos) {
			console.log(aluno);
		}
	} finally {
		await client.close();
	}
}

run().catch(console.error);