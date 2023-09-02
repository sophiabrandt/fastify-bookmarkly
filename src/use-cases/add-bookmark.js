const { makeBookmark } = require("../bookmark");

function makeAddBookmark({ bookmarksDb }) {
  return async function addBookmark(bookmarkInfo) {
    const bookmark = makeBookmark(bookmarkInfo);
    return bookmarksDb.insert({
      id: bookmark.getId(),
      title: bookmark.getTitle(),
      url: bookmark.getUrl(),
      status: bookmark.getStatus(),
      description: bookmark.getDescription(),
      createdOn: bookmark.getCreatedOn(),
      modifiedOn: bookmark.getModifiedOn(),
    });
  };
}

module.exports = { makeAddBookmark };
