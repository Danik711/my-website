import { MongoClient } from "mongodb";

export async function connectMongoClient() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zqrovqh.mongodb.net/${process.env.mongodb_database}?retryWrites=true&&w=majority`;
  const client = await MongoClient.connect(connectionString);

  return client;
}

export async function insertOneDoc(db, collectionName, document) {
  return await db.collection(collectionName).insertOne(document);
}
