const { listBookmarks } = require('../use-cases')

function makeGetBookmarks() {
  return async function getBookmarks(httpRequest) {
    const queryString = httpRequest.query
    const params = httpRequest.params

    try {
      const bookmarks = await listBookmarks({ queryString, params })

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
