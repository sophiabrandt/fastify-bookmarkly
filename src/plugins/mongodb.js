"use strict";
const fp = require("fastify-plugin");
const { bookmarksDb } = require("../data-access");

module.exports = fp(function (fastify, _opts, next) {
  fastify.register(require("@fastify/mongodb"), {
    forceClose: true,
    client: bookmarksDb,
  });
  next();
});
