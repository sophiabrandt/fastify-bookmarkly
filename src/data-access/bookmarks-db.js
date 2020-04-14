function makeBookmarksDb({ makeDb, database }) {
  async function findAll({
    max = 100,
    search,
    createdBefore,
    createdAfter,
    modifiedBefore,
    modifiedAfter,
  } = {}) {
    const query = {}
    if (search) {
      query.$text = { $search: search }
    }
    if (createdBefore || createdAfter) {
      query.createdOn = {}
      query.createdOn = createdBefore
        ? { ...query.createdOn, $lt: new Date(createdBefore) }
        : query.createdOn
      query.createdOn = createdAfter
        ? { ...query.createdOn, $gt: new Date(createdAfter) }
        : query.createdOn
    }
    if (modifiedBefore || modifiedAfter) {
      query.modifiedOn = {}
      query.modifiedOn = modifiedBefore
        ? { ...query.modifiedOn, $lt: new Date(modifiedBefore) }
        : query.modifiedOn
      query.modifiedOn = modifiedAfter
        ? { ...query.modifiedOn, $gt: new Date(modifiedAfter) }
        : query.modifiedOn
    }

    const db = await makeDb()
    const result = await db
      .collection(database)
      .find(query)
      .limit(Number(max))
      .toArray()
    return result.map(({ _id: id, ...found }) => ({ id, ...found }))
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
