const { Id } = require("../Id");
const { InvalidPropertyError } = require("../utils/errors");
const { isValidUrl } = require("../utils/is-valid");
const { requiredParam } = require("../utils/required-param");
const { buildMakeBookmark } = require("./bookmark");

const makeBookmark = buildMakeBookmark({
  Id,
  InvalidPropertyError,
  isValidUrl,
  requiredParam,
});

module.exports = { makeBookmark };
