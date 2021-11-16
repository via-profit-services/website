# Getting Started

## Table of contents

- [Installation](#installation)
- [Basic usage](#basic-usage)

## Installation

You need to install the peer dependencies to:

```bash
$ yarn add @via-profit-services/core ioredis @via-profit-services/redis
```

## Basic usage

_schema.js_

```js
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

/**
 * Simple GraphQL schema
 *
 * SDL of this schema:
 * ```graphql
 * type Query {
 *   html: String!
 * }
 * ```
 */

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      html: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: async (_parent, _args, context) => {
          const { redis } = context;
          const cachedHtml = await redis.get("html");

            if (cachedHtml) {
              console.info("HTML was returned from the cache");

              return cachedHtml;
            }

            const html = `<!DOCTYPE html>
              <html>
                <body>
                  <h1>Some title</h1>
                  <p>Some content</p>
                </body>
              </html>`;

            await redis.set("html", html);

            return html;
        }
      }
    })
  })
});

module.exports = schema;

```
_index.js_

```js
const core = require("@via-profit-services/core");
const redis = require("@via-profit-services/redis");
const express = require("express");
const { createServer } = require("http");

const schema = require("./schema");

(async () => {
  const port = 8085;
  const app = express();
  const server = createServer(app);

  const redisMiddleware = redis.factory({
    host: "localhost",
    password: "",
    maxRetriesPerRequest: 3,
    db: 0
  });

  const { graphQLExpress } = await core.factory({
    server,
    schema,
    middleware: [redisMiddleware]
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at port ${port}`);
  });
})();

```

[![Edit @via-profit-services-redis-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-redis-basic-fpi2q?fontsize=14&hidenavigation=1&theme=dark)

