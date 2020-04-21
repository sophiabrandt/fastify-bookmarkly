const { listSingleBookmark } = require('../use-cases')

function makeGetSingleBookmark() {
  return async function getSingleBookmark(httpRequest) {
    try {
      const found = await listSingleBookmark({ id: httpRequest.params.id })
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: found.found ? 200 : 404,
        body: { found },
      }
    } catch (error) {
      return makeHttpError({ statusCode: 400, errorMessage: error.message })
    }
  }
}

module.exports = { makeGetSingleBookmark }
