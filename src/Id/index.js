const { createId, isCuid } = require("@paralleldrive/cuid2");

const Id = Object.freeze({
  makeId: createId,
  isValidId: isCuid,
});

module.exports = { Id };
