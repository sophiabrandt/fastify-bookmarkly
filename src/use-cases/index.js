const { bookmarksDb } = require('../data-access')
const { makeListBookmarks } = require('./list-bookmarks')
const { makeCreateBookmark } = require('./create-bookmark')

const listBookmarks = makeListBookmarks({ bookmarksDb })
const createBookmark = makeCreateBookmark({ bookmarksDb })

const bookmarksService = Object.freeze({
  listBookmarks,
  createBookmark,
})

module.exports = { bookmarksService, listBookmarks, createBookmark }
