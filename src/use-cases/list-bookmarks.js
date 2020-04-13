function makeListBookmarks({ bookmarksDb }) {
  return async function listBookmarks(params) {
    return bookmarksDb.findAll(params)
  }
}

module.exports = { makeListBookmarks }
