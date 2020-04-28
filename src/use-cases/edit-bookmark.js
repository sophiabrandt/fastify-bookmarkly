const { makeBookmark } = require('../bookmark')

function makeEditBookmark({ bookmarksDb }) {
  return async function editBookmark({ id, ...changes } = {}) {
    if (!id) {
      throw new Error('Id is required.')
    }
    if (!changes) {
      throw new Error('You must supply changes to the bookmark.')
    }
    const existing = await bookmarksDb.findById({ id })

    if (!existing) {
      throw new RangeError('Bookmark not found.')
    }

    const bookmark = makeBookmark({
      ...existing,
      ...changes,
      modifiedOn: Date.now(),
    })
    return bookmarksDb.update({
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

module.exports = { makeEditBookmark }
