const { addBookmark } = require('../use-cases')
const { makeHttpError } = require('../utils/http-error')

function makePostBookmark() {
  return async function postBookmark(httpRequest) {
    let bookInfo = httpRequest.body

    if (!bookInfo) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Bad request. No POST body.',
      })
    }

    if (typeof httpRequest.body === 'string') {
      try {
        bookInfo = JSON.parse(bookInfo)
      } catch {
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. POST body must be valid JSON.',
        })
      }
    }

    try {
      const bookmark = await addBookmark(bookInfo)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: bookmark,
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

module.exports = { makePostBookmark }
