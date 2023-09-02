"use strict";
const fp = require("fastify-plugin");

module.exports = fp(function (fastify, _opts, next) {
  fastify.register(require("@fastify/swagger"), {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "fastify-bookmarkly",
        description: "Documentation for the fastify-bookmarkly API",
      },
    },
  });
  next();
});
