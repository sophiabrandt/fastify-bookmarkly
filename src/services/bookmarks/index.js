'use strict'
const { makeFastifyCallback } = require('../../fastify-callback')
const { getBookmarks } = require('../../controllers')
module.exports = function (fastify, opts, next) {
  fastify.get('/bookmarks', makeFastifyCallback(getBookmarks))
  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
