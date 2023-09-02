const { listBookmarks } = require("../use-cases");
const { makeHttpError } = require("../utils/http-error");

function makeGetBookmarks() {
  return async function getBookmarks(httpRequest) {
    const queryStrings = httpRequest.query;
    try {
      const bookmarks = await listBookmarks(queryStrings);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: bookmarks,
      };
    } catch (error) {
      return makeHttpError({ statusCode: 400, errorMessage: error.message });
    }
  };
}

module.exports = { makeGetBookmarks };
