const { MongoClient } = require("mongodb");
const configNPM = require("config");
const { makeBookmarksDb } = require("./bookmarks-db");

const dbConfig = configNPM.get("db");

const url = `mongodb://${dbConfig.host}:${dbConfig.port}`;
const database = `${dbConfig.database}`;
const client = new MongoClient(url);

let cachedDb;

async function makeDb() {
  if (cachedDb) {
    console.info("Found existing connection to database");
    return cachedDb;
  }
  try {
    console.info("Connecting to database ...");
    await client.connect();
    const db = client.db(database);
    await db.command({ ping: 1 });
    cachedDb = db;
    return db;
  } catch (err) {
    console.error("Couldn't connect to database");
    throw err;
  }
}

const bookmarksDb = makeBookmarksDb({ makeDb, database });

module.exports = {
  bookmarksDb,
  makeDb,
};
