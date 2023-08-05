const { MongoClient } = require("mongodb");
const dbConfig = require("./dbConfig");

const dbName = dbConfig.DB_NAME;

const client = new MongoClient(dbConfig.DB_URL, { useUnifiedTopology: true });
const connect = async () => {
  const conn = await client.connect();
  console.log("Connected Successfully to Database");
  const db = conn.db(dbName);
  return db;
};

module.exports = {
  connect,
};
