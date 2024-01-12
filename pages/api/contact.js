import { connectMongoClient, insertOneDoc } from "@/lib/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ error: "Invalid data provided.", body: req.body });
      return;
    }

    let client;
    const newMessage = {
      email,
      name,
      message,
    };

    try {
      client = await connectMongoClient();
    } catch (err) {
      res.status(500).json({ error: "Cannot connnect to MongoDB" });
      return;
    }

    try {
      await insertOneDoc(client.db(), "messages", newMessage);
    } catch (err) {
      res.status(500).json({ error: "Cannot connnect to MongoDB" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Success", newMessage });
  }
}

export default handler;
