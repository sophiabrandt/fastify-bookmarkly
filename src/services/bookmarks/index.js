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
  fastify.get('/', makeFastifyCallback(getBookmarks))
  fastify.get('/:id', makeFastifyCallback(getSingleBookmark))
  fastify.post('/', makeFastifyCallback(postBookmark))
  fastify.patch('/:id', makeFastifyCallback(patchBookmark))
  fastify.delete('/:id', makeFastifyCallback(deleteBookmark))
  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
