const bookmarkStatus = Object.freeze({
  notStarted: 'NOT_STARTED',
  inProgress: 'IN_PROGRESS',
  finished: 'FINISHED',
})

function buildMakeBookmark({
  Id,
  InvalidPropertyError,
  isValidUrl,
  requiredParam,
}) {
  return function makeBookMark(bookmarkInfo) {
    const validBookmark = validate(bookmarkInfo)

    function validate({
      id = Id.makeId(),
      title = requiredParam('title'),
      url = requiredParam('link'),
      status = bookmarkStatus.notStarted,
      description = '',
      createdOn = new Date(Date.now()).toUTCString(),
      modifiedOn = new Date(Date.now()).toUTCString(),
      ...otherInfo
    }) {
      validateId(id)
      validateTitle(title)
      validateUrl(url)
      validateStatus(upperAndTrimStatus(status))
      return { title, url, ...otherInfo }
    }

    function upperAndTrimStatus(bookmarkStatus) {
      return bookmarkStatus.trim().toUpperCase()
    }

    function validateId(id) {
      if (!Id.isValidId(id)) {
        throw new InvalidPropertyError('Invalid id.')
      }
    }

    function validateTitle(title) {
      if (title.length < 2) {
        throw new InvalidPropertyError(
          'Title must be at least 2 characters long.'
        )
      }
    }

    function validateStatus(status) {
      /* check if status is one of bookMarkStatus */
      if (
        !Object.values(bookmarkStatus).some(
          (statusValue) => statusValue === status
        )
      ) {
        throw new InvalidPropertyError('Invalid status.')
      }
    }

    function validateUrl(url) {
      if (!isValidUrl(url)) {
        throw new InvalidPropertyError('Invalid url.')
      }
    }

    return Object.freeze({
      getId: () => validBookmark.id,
      getTitle: () => validBookmark.title,
      getUrl: () => validBookmark.url,
      getStatus: () => validBookmark.status,
      getCreatedOn: () => validBookmark.createdOn,
      getModifiedOn: () => validBookmark.modifiedOn,
    })
  }
}

module.exports = { buildMakeBookmark }
