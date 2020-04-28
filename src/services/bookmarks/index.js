'use strict'
const { makeFastifyCallback } = require('../../fastify-callback')
const {
  getBookmarks,
  getSingleBookmark,
  postBookmark,
  patchBookmark,
  deleteBookmark,
} = require('../../controllers')
module.exports = function (fastify, opts, next) {
  fastify.get('/bookmarks', makeFastifyCallback(getBookmarks))
  fastify.get('/bookmarks/:id', makeFastifyCallback(getSingleBookmark))
  fastify.post('/bookmarks', makeFastifyCallback(postBookmark))
  fastify.patch('/bookmarks/:id', makeFastifyCallback(patchBookmark))
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
