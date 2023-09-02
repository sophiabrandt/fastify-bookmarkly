function makeRemoveBookmark({ bookmarksDb }) {
  return async function removeBookmark({ id } = {}) {
    if (!id) {
      throw new Error("You must supply a book id.");
    }

    const bookmarkToDelete = await bookmarksDb.findById({ id });

    if (!bookmarkToDelete) {
      return deleteNothing();
    }

    function deleteNothing() {
      return {
        deleted: false,
        message: "Bookmark not found, nothing to delete.",
      };
    }

    return bookmarksDb.remove({ id });
  };
}

module.exports = { makeRemoveBookmark };
