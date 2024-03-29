"use strict";

const { test } = require("tap");
const Fastify = require("fastify");
const Support = require("../../src/plugins/support");

test("support works standalone", (t) => {
  t.plan(2);
  const fastify = Fastify();
  fastify.register(Support);

  fastify.ready((err) => {
    t.error(err);
    t.equal(fastify.someSupport(), "hugs");
  });
});

// If you prefer async/await, use the following
//
// test('support works standalone', async (t) => {
//   const fastify = Fastify()
//   fastify.register(Support)
//
//   await fastify.ready()
//   t.equal(fastify.someSupport(), 'hugs')
// })
