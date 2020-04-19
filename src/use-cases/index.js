const { bookmarksDb } = require('../data-access')
const { makeListBookmarks } = require('./list-bookmarks')
const { makeAddBookmark } = require('./add-bookmark')

const listBookmarks = makeListBookmarks({ bookmarksDb })
const addBookmark = makeAddBookmark({ bookmarksDb })

const bookmarksService = Object.freeze({
  listBookmarks,
  addBookmark,
})

module.exports = { bookmarksService, listBookmarks, addBookmark }
