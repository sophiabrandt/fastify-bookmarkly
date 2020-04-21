const { makeGetBookmarks } = require('./get-bookmarks')
const { makeGetSingleBookmark } = require('./get-single-bookmark')
const { makePostBookmark } = require('./post-bookmark')
const { makeDeleteBookmark } = require('./delete-bookmark')

const getBookmarks = makeGetBookmarks()
const getSingleBookmark = makeGetSingleBookmark()
const postBookmark = makePostBookmark()
const deleteBookmark = makeDeleteBookmark()

const bookmarksController = Object.freeze({
  getBookmarks,
  getSingleBookmark,
  postBookmark,
  deleteBookmark,
})

module.exports = {
  bookmarksController,
  getBookmarks,
  getSingleBookmark,
  postBookmark,
  deleteBookmark,
}
