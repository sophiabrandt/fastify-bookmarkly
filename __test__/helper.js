"use strict";

// This file contains code that we reuse
// between our tests.

const Fastify = require("fastify");
const fp = require("fastify-plugin");
const App = require("../src/app");
const clean = require("mongo-clean");
const configNPM = require("config");
const { MongoClient } = require("mongodb");
const { beforeEach, teardown } = require("tap");

const dbConfig = configNPM.get("db");

const url = `mongodb://${dbConfig.host}:${dbConfig.port}`;
const database = `${dbConfig.database}`;

let client;

beforeEach(async function () {
  if (!client) {
    client = await MongoClient.connect(url, {
      w: 1,
    });
  }
  await clean(client.db(database));
});

teardown(async function () {
  if (client) {
    await client.close();
    client = null;
  }
});

// Fill in this config with all the configurations
// needed for testing the application
function config() {
  return {
    mongodb: {
      client,
      database,
    },
  };
}

// automatically build and tear down our instance
function build(t) {
  const app = Fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(App), config());

  // tear down our app after we are done
  t.teardown(app.close.bind(app));

  return app;
}

module.exports = {
  config,
  build,
};
