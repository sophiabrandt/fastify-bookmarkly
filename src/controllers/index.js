const { makeGetBookmarks } = require("./get-bookmarks");
const { makeGetSingleBookmark } = require("./get-single-bookmark");
const { makePostBookmark } = require("./post-bookmark");
const { makePatchBookmark } = require("./patch-bookmark");
const { makeDeleteBookmark } = require("./delete-bookmark");

const getBookmarks = makeGetBookmarks();
const getSingleBookmark = makeGetSingleBookmark();
const postBookmark = makePostBookmark();
const patchBookmark = makePatchBookmark();
const deleteBookmark = makeDeleteBookmark();

const bookmarksController = Object.freeze({
  getBookmarks,
  getSingleBookmark,
  postBookmark,
  patchBookmark,
  deleteBookmark,
});

module.exports = {
  bookmarksController,
  getBookmarks,
  getSingleBookmark,
  postBookmark,
  patchBookmark,
  deleteBookmark,
};
