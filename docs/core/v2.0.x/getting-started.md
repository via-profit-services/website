# Getting Started

## Table of contents

 - [Installation](#installation)
 - [Basic GraphQL server](#basic-graphql-server)
 - [GraphQL server with @graphql-tools](#graphql-server-with-graphql-tools)
 - [More examples](#more-examples)

## Installation

First of all you should install some peer dependencies and install the core:

- [Express](https://github.com/expressjs/express) - Node HTTP Server
- [GraphQL](https://github.com/graphql/graphql-js) - The JavaScript reference implementation for GraphQL

```bash
$ yarn add express graphql @via-profit-services/core
```

## Basic GraphQL server

To build your first project you should do some things:

- Make your GraphQL schema
- Create an http server

Let's make it:

_./schema.js_

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
 *   version: String!
 * }
 * ```
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      version: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: () => "v2.0.x"
      }
    })
  })
});

module.exports = schema;
```

_./index.js_
```js
import { createServer } from "http";
import express from "express";
import { factory } from "@via-profit-services/core";
import schema from "./schema";

(async () => {
  const port = 8080;
  const app = express();
  const server = createServer(app);

  const { graphQLExpress } = await factory({
    server,
    schema
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at port ${port}`);
  });
})();
```

[![Edit @via-profit-services-core-node-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-core-node-basic-xii7w?fontsize=14&hidenavigation=1&theme=dark&view=editor)

## GraphQL server with @graphql-tools

We strongly recommend using [@graphql-tools](https://github.com/ardatan/graphql-tools) package to build your schemas. This package helps to combine SDL and resolvers into a single executable schema. See `makeExecutableSchema` of `@graphql-tools/schema` module.

Core module also exports its own typeDefs and resolvers. Those definitions would declare Query and Mutation root types. See [API](./api.md) and [Type defs](./typedefs.md) for more details.

```js
import { createServer } from "http";
import express from "express";
import * as core from "@via-profit-services/core";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = /* GraphQL */ `
  extend type Query {
    """
    DateTime type is a scalar type added from Core typeDefs
    """
    currentDate: DateTime!
  }
`;

const resolvers = {
  Query: {
    currentDate: () => new Date()
  }
};

(async () => {
  const port = 8080;
  const app = express();
  const server = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs: [
      core.typeDefs,
      typeDefs // <-- Put your types here
    ],
    resolvers: [
      core.resolvers,
      resolvers // <-- Put your resolvers here
    ]
  });

  const { graphQLExpress } = await core.factory({
    server,
    schema
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at port ${port}`);
  });
})();
```

[![Edit @via-profit-services-core-node-graphql-tools](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-core-node-graphql-tools-04s8s?fontsize=14&hidenavigation=1&theme=dark)



## More examples

We have collected all examples in one place. [Here](./examples.md).