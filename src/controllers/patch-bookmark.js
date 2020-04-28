const { editBookmark } = require('../use-cases')
const { makeHttpError } = require('../utils/http-error')

function makePatchBookmark() {
  return async function patchBookmark(httpRequest) {
    let bookmarkInfo = httpRequest.body
    let id = httpRequest.params.id

    if (!bookmarkInfo) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Bad request. No PATCH body.',
      })
    }

    if (typeof httpRequest.body === 'string') {
      try {
        bookInfo = JSON.parse(bookInfo)
      } catch {
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. PATCH body must be valid JSON.',
        })
      }
    }

    try {
      const bookmark = await editBookmark({ id, ...bookmarkInfo })
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: bookmark,
      }
    } catch (error) {
      if (error.name === 'RangeError') {
        return makeHttpError({
          statusCode: 404,
          errorMessage: error.message
        })
      }
      return makeHttpError({
        statusCode: 400,
        errorMessage: error.message
      })
    }
  }
}

module.exports = { makePatchBookmark }
