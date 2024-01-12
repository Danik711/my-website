import { MongoClient } from "mongodb";

export async function connectMongoClient(database) {
  const client = await MongoClient.connect(
    "mongodb+srv://events:Z8xbBXTvnAIdzvWF@nextjs-events.zqrovqh.mongodb.net/" +
      database +
      "?retryWrites=true&&w=majority"
  );

  return client;
}

export async function insertOneDoc(db, collectionName, document) {
  return await db.collection(collectionName).insertOne(document);
}
