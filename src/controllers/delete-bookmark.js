const { removeBookmark } = require("../use-cases");
const { makeHttpError } = require("../utils/http-error");

function makeDeleteBookmark() {
  return async function deleteBookmark(httpRequest) {
    try {
      const deleted = await removeBookmark({ id: httpRequest.params.id });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: deleted.deleted ? 200 : 404,
        body: { deleted },
      };
    } catch (error) {
      return makeHttpError({ statusCode: 400, errorMessage: error.message });
    }
  };
}

module.exports = { makeDeleteBookmark };
