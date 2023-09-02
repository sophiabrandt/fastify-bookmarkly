function makeListSingleBookmark({ bookmarksDb }) {
  return async function listSingleBookmark({ id } = {}) {
    if (!id) {
      throw new Error("You must supply a book id.");
    }

    const foundBookmark = await bookmarksDb.findById({ id });

    if (!foundBookmark) {
      return foundNothing();
    }

    function foundNothing() {
      return {
        found: false,
        message: "Bookmark not found.",
      };
    }
    return foundBookmark;
  };
}

module.exports = { makeListSingleBookmark };
