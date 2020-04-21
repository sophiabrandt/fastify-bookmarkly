const { bookmarksDb } = require('../data-access')
const { makeListBookmarks } = require('./list-bookmarks')
const { makeAddBookmark } = require('./add-bookmark')
const { makeRemoveBookmark } = require('./remove-bookmark')

const listBookmarks = makeListBookmarks({ bookmarksDb })
const addBookmark = makeAddBookmark({ bookmarksDb })
const removeBookmark = makeRemoveBookmark({ bookmarksDb })

const bookmarksService = Object.freeze({
  listBookmarks,
  addBookmark,
  removeBookmark,
})

module.exports = {
  bookmarksService,
  listBookmarks,
  addBookmark,
  removeBookmark,
}
