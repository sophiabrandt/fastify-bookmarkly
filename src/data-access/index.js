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
  db.makeId = makeIdFromString
  return db
}

function makeIdFromString(id) {
  return new mongodb.ObjectID(id)
}

const bookmarksDb = makeBookmarksDb({ makeDb })

module.exports = {
  bookmarksDb,
  makeDb,
}
