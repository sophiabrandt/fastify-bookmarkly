const mongodb = require('mongodb')
const configNPM = require('config')
const { makeBookmarksDb } = require('./bookmarks-db')

const dbConfig = configNPM.get('db')

const MongoClient = mongodb.MongoClient
const url = `mongodb://${dbConfig.host}:${dbConfig.port}`
const database = `${dbConfig.database}`
const client = new MongoClient(url, { useUnifiedTopology: true })

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  const db = client.db(database)
  return db
}

const bookmarksDb = makeBookmarksDb({ makeDb, database })

module.exports = {
  bookmarksDb,
  makeDb,
}
