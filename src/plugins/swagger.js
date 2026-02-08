"use strict";
const fp = require("fastify-plugin");

module.exports = fp(function (fastify, _opts, next) {
  fastify.register(require("@fastify/swagger"), {
    mode: "dynamic",
    openapi: {
      info: {
        title: String,
        description: String,
        version: String,
      },
    },
  });
  fastify.register(require("@fastify/swagger-ui"), {
    exposeRoute: true,
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
  });
  next();
});
