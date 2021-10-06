# Getting Started

## Dependencies (peer)

- [Express](https://github.com/expressjs/express) - Node HTTP Server
- [GraphQL](https://github.com/graphql/graphql-js) - The JavaScript reference implementation for GraphQL

## Installation

First of all you should install some peer dependencies by running:

```bash
$ yarn add express graphql @via-profit-services/core
```


To build your first project you should do some things:

- Make your GraphQL schema
- Create an http server

Let's make it:

__./schema.js__

```js
const schema = /* GraphQL */ `
  type Query {
    version: String!
  }
`;
```

__./index.js__
```js
import express from 'express';
import http from 'http';
import * as core from '@via-profit-services/core';

import schema from './schema';

(async () => {
  const port = 9005;
  const app = express();
  const server = http.createServer(app);

  const { graphQLExpress } = await corefactory({
    server,
    schema,
  });

  app.use('/graphql', graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at http://localhost:${port}/graphql`);
  });
})();
```

[![Edit @via-profit-services-core-node-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-core-node-basic-xii7w?fontsize=14&hidenavigation=1&theme=dark&view=editor)

We strongly recommend using [@graphql-tools](https://github.com/ardatan/graphql-tools) package to build your schemas. This package helps to combine SDL and resolvers into a single executable schema. See `makeExecutableSchema` of `@graphql-tools/schema` module. For more details: [example with graphql-tools](./examples/graphql-tools/README.md)

Core module also exports its own typeDefs and resolvers. Those definitions would declare Query and Mutation root types.

```ts
import express from 'express';
import http from 'http';
import { factory, typeDefs, resolver } from '@via-profit-services/core';
import { makeExecutableSchema } from '@graphql-tools/schema';

import customTypeDefs from 'schema.graphql';
import customResolvers from './resolvers';

(async () => {
  const port = 9005;
  const app = express();
  const server = http.createServer(app);

  // make schema by graphql-tools
  const schema = makeExecutableSchema({
    typeDefs: [
      customTypeDefs, // <-- Put your custom SDL here
      typeDefs, // <-- Put here the base core type definitions
    ],
    resolvers: [
      customResolvers, // < -- Put your custom resolvers here
      resolvers, // <-- put here the base core resolvers
    ],
  });

  const { graphQLExpress } = await factory({
    server,
    schema,
  });

  app.use('/graphql', graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at http://localhost:${port}/graphql`);
  });
})();
```
