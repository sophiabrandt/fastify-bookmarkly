function makeBookmarksDb({ makeDb, database }) {
  async function findAll({ queryString, params }) {
    const db = await makeDb()
    const result = await db.collection(database).find().toArray()
    return result
  }

  async function findById() {}

  async function insert() {}

  async function update() {}

  async function remove() {}

  return Object.freeze({ findAll, findById, insert, update, remove })
}

module.exports = {
  makeBookmarksDb,
}
