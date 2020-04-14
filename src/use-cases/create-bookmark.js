const { makeBookmark } = require('../bookmark')

function makeCreateBookmark({ bookmarksDb }) {
  return async function createBookmark(bookmarkInfo) {
    const bookmark = makeBookmark(bookmarkInfo)
    return bookmarksDb.insert({
      id: bookmark.getId(),
      title: bookmark.getTitle(),
      url: bookmark.getUrl(),
      status: bookmark.getStatus(),
      description: bookmark.getDescription(),
      createdOn: bookmark.getCreatedOn(),
      modifiedOn: bookmark.getModifiedOn(),
    })
  }
}

module.exports = { makeCreateBookmark }
