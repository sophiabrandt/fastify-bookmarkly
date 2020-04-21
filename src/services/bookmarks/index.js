'use strict'
const { makeFastifyCallback } = require('../../fastify-callback')
const {
  getBookmarks,
  postBookmark,
  deleteBookmark,
} = require('../../controllers')
module.exports = function (fastify, opts, next) {
  fastify.get('/bookmarks', makeFastifyCallback(getBookmarks))
  fastify.post('/bookmarks', makeFastifyCallback(postBookmark))
  fastify.delete('/bookmarks/:id', makeFastifyCallback(deleteBookmark))
  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
