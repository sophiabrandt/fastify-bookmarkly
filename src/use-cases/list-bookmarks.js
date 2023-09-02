function makeListBookmarks({ bookmarksDb }) {
  return async function listBookmarks(queryStrings) {
    return bookmarksDb.findAll(queryStrings);
  };
}

module.exports = { makeListBookmarks };
