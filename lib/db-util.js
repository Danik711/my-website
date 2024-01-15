import { MongoClient } from "mongodb";

export async function connectMongoClient() {
  const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTERNAME}.zqrovqh.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&&w=majority`;
  const client = await MongoClient.connect(connectionString);

  return client;
}

export async function insertOneDoc(db, collectionName, document) {
  return await db.collection(collectionName).insertOne(document);
}
