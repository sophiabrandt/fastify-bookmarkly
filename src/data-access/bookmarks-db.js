function makeBookmarksDb({ makeDb, database }) {
  async function findAll({
    max = 100,
    search,
    createdBefore,
    createdAfter,
    modifiedBefore,
    modifiedAfter,
  } = {}) {
    const query = {};
    if (search) {
      query.$text = { $search: search };
    }
    if (createdBefore || createdAfter) {
      query.createdOn = {};
      query.createdOn = createdBefore
        ? { ...query.createdOn, $lt: new Date(createdBefore) }
        : query.createdOn;
      query.createdOn = createdAfter
        ? { ...query.createdOn, $gt: new Date(createdAfter) }
        : query.createdOn;
    }
    if (modifiedBefore || modifiedAfter) {
      query.modifiedOn = {};
      query.modifiedOn = modifiedBefore
        ? { ...query.modifiedOn, $lt: new Date(modifiedBefore) }
        : query.modifiedOn;
      query.modifiedOn = modifiedAfter
        ? { ...query.modifiedOn, $gt: new Date(modifiedAfter) }
        : query.modifiedOn;
    }

    const db = await makeDb();
    const result = await db
      .collection(database)
      .find(query)
      .limit(Number(max))
      .toArray();
    return result.map(({ _id: id, ...found }) => ({ id, ...found }));
  }

  async function findById({ id: _id }) {
    const db = await makeDb();
    const result = await db.collection(database).find({ _id });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }

  async function insert({ id: _id, ...bookmarkInfo }) {
    const db = await makeDb();
    const { insertedId: id } = await db
      .collection(database)
      .insertOne({ _id, ...bookmarkInfo });
    return { id, ...bookmarkInfo };
  }

  async function update({ id: _id, ...updatedInfo }) {
    const db = await makeDb();
    const result = await db
      .collection(database)
      .updateOne({ _id }, { $set: { ...updatedInfo } });
    return result.modifiedCount > 0 ? { id: _id, ...updatedInfo } : null;
  }

  async function remove({ id: _id }) {
    const db = await makeDb();
    const result = await db.collection(database).deleteOne({ _id });
    const deleted = Boolean(result.deletedCount);
    return deleted;
  }

  return Object.freeze({ findAll, findById, insert, update, remove });
}

module.exports = {
  makeBookmarksDb,
};
