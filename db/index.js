const configNPM = require('config')
const { makeDb } = require('../src/data-access')

const dbConfig = configNPM.get('db')

;(async function setupDb() {
  console.log('Setting up database...')
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await makeDb()
  const result = await db.collection(dbConfig.database).createIndex({
    title: 'text',
    description: 'text',
  })
  console.log(result)
  console.log(`Database setup for collection ${dbConfig.database} complete...`)
  process.exit()
})()
