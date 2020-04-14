const { makeGetBookmarks } = require('./get-bookmarks')
const { makePostBookmark } = require('./post-bookmark')

const getBookmarks = makeGetBookmarks()
const postBookmark = makePostBookmark()

const bookmarksController = Object.freeze({ getBookmarks, postBookmark })

module.exports = { bookmarksController, getBookmarks, postBookmark }
