function makeFastifyCallback(controller) {
  return (request, reply) => {
    const httpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      method: request.raw.method,
      headers: {
        'Content-Type': request.headers['content-type'],
        Referer: request.headers.referer,
        'User-Agent': request.headers['user-agent'],
      },
    }
    console.log(httpRequest)
    controller(httpRequest)
      .then((httpReply) => {
        if (httpRequest.headers) {
          reply.headers(httpReply.headers)
        }
        reply.type('application/json')
        reply.status(httpReply.statusCode).send(httpReply.body)
      })
      .catch((_error) =>
        reply.status(500).send({ error: 'An unkown error occurred.' })
      )
  }
}

module.exports = { makeFastifyCallback }
