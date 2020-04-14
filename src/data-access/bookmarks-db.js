function makeBookmarksDb({ makeDb, database }) {
  async function findAll({ queryString, params }) {
    const db = await makeDb()
    const result = await db.collection(database).find().toArray()
    return result
  }

  async function findById() {}

  async function insert({ id: _id, ...bookmarkInfo }) {
    const db = await makeDb()
    const inserted = await db
      .collection(database)
      .insertOne({ _id, ...bookmarkInfo })
    const { _id: id, ...insertedInfo } = inserted.ops[0]
    return { id, ...insertedInfo }
  }

  async function update() {}

  async function remove() {}

  return Object.freeze({ findAll, findById, insert, update, remove })
}

module.exports = {
  makeBookmarksDb,
}
