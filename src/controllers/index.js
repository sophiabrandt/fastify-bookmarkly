const { makeGetBookmarks } = require('./get-bookmarks')
const { makePostBookmark } = require('./post-bookmark')
const { makeDeleteBookmark } = require('./delete-bookmark')

const getBookmarks = makeGetBookmarks()
const postBookmark = makePostBookmark()
const deleteBookmark = makeDeleteBookmark()

const bookmarksController = Object.freeze({
  getBookmarks,
  postBookmark,
  deleteBookmark,
})

module.exports = {
  bookmarksController,
  getBookmarks,
  postBookmark,
  deleteBookmark,
}
