const { Id } = require('../Id')
const { InvalidPropertyError } = require('../utils/errors')
const { isValidUrl } = require('../utils/is-valid')
const { requiredParam } = require('../utils/required-param')
const { buildMakeBookmark } = require('./bookmark')

const makeBookMark = buildMakeBookmark({ Id, isValidUrl, requiredParam })

module.exports = { makeBookMark }
