const { bookmarksDb } = require('../data-access')
const { makeListBookmarks } = require('./list-bookmarks')

const listBookmarks = makeListBookmarks({ bookmarksDb })

const bookmarksService = Object.freeze({
  listBookmarks,
})

module.exports = { bookmarksService, listBookmarks }
