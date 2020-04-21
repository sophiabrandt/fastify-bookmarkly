const { bookmarksDb } = require('../data-access')
const { makeListBookmarks } = require('./list-bookmarks')
const { makeListSingleBookmark } = require('./list-single-bookmark')
const { makeAddBookmark } = require('./add-bookmark')
const { makeRemoveBookmark } = require('./remove-bookmark')

const listBookmarks = makeListBookmarks({ bookmarksDb })
const listSingleBookmark = makeListSingleBookmark({ bookmarksDb })
const addBookmark = makeAddBookmark({ bookmarksDb })
const removeBookmark = makeRemoveBookmark({ bookmarksDb })

const bookmarksService = Object.freeze({
  listBookmarks,
  listSingleBookmark,
  addBookmark,
  removeBookmark,
})

module.exports = {
  bookmarksService,
  listBookmarks,
  listSingleBookmark,
  addBookmark,
  removeBookmark,
}
