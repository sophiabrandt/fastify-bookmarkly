function makeGetBookmarks({ listBookmarks }) {
  return async function getBookmarks(httpRequest) {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 200,
      body: 'success',
    }
  }
}

module.exports = { makeGetBookmarks }
