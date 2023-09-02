const bookmarkStatus = Object.freeze({
  notStarted: "NOT_STARTED",
  inProgress: "IN_PROGRESS",
  finished: "FINISHED",
});

function buildMakeBookmark({
  Id,
  InvalidPropertyError,
  isValidUrl,
  requiredParam,
}) {
  return function makeBookMark(bookmarkInfo) {
    const validBookmark = validate(bookmarkInfo);

    function validate({
      id = Id.makeId(),
      title = requiredParam("title"),
      url = requiredParam("url"),
      status = bookmarkStatus.notStarted,
      description = "",
      createdOn = Date.now(),
      modifiedOn = Date.now(),
    }) {
      validateId(id);
      title = transformTitle(title);
      validateTitle(title);
      validateUrl(url);
      status = transformStatus(status);
      validateStatus(status);
      createdOn = transformDatetoDateObject(createdOn);
      modifiedOn = transformDatetoDateObject(modifiedOn);
      validateDate(createdOn);
      validateDate(modifiedOn);
      return Object.freeze({
        id,
        title,
        url,
        status,
        description,
        createdOn,
        modifiedOn,
      });
    }

    function validateId(id) {
      if (!Id.isValidId(id)) {
        throw new InvalidPropertyError("Invalid id.");
      }
    }

    function validateTitle(title) {
      if (title.length < 2) {
        throw new InvalidPropertyError(
          "Title must be at least 2 characters long.",
        );
      }
    }

    function validateStatus(status) {
      /* check if status is one of bookmarkStatus */
      if (
        !Object.values(bookmarkStatus).some(
          (statusValue) => statusValue === status,
        )
      ) {
        throw new InvalidPropertyError(
          "Invalid status: must be either NOT_STARTED, IN_PROGRESS or FINISHED.",
        );
      }
    }

    function transformTitle(title) {
      return title.trim();
    }

    function transformStatus(status) {
      return status.trim().toUpperCase();
    }

    function validateUrl(url) {
      if (!isValidUrl(url)) {
        throw new InvalidPropertyError("Invalid url.");
      }
    }

    function validateDate(date) {
      if (Object.prototype.toString.call(date) !== "[object Date]") {
        throw new InvalidPropertyError("Must be a valid date.");
      }
      return date;
    }

    function transformDatetoDateObject(date) {
      /* transform to ISO String, then transform to Date object*/
      return new Date(new Date(date).toISOString());
    }

    return Object.freeze({
      getId: () => validBookmark.id,
      getTitle: () => validBookmark.title,
      getUrl: () => validBookmark.url,
      getStatus: () => validBookmark.status,
      getDescription: () => validBookmark.description,
      getCreatedOn: () => validBookmark.createdOn,
      getModifiedOn: () => validBookmark.modifiedOn,
    });
  };
}

module.exports = { buildMakeBookmark };
