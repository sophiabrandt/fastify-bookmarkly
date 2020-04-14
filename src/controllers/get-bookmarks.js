const { listBookmarks } = require('../use-cases')

function makeGetBookmarks() {
  return async function getBookmarks(httpRequest) {
    const queryStrings = httpRequest.query
    try {
      const bookmarks = await listBookmarks(queryStrings)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: bookmarks,
      }
    } catch (error) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: { error: error.message },
      }
    }
  }
}

module.exports = { makeGetBookmarks }
