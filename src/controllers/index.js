const { listBookmarks } = require('../use-cases')
const { makeGetBookmarks } = require('./get-bookmarks')

const getBookmarks = makeGetBookmarks({ listBookmarks })

const bookmarksController = Object.freeze({ getBookmarks })

module.exports = { bookmarksController, getBookmarks }
