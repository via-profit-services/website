# Authentification Getting started

## Table of contents

- [Installation](#installation)
- [Basic usage](#basic-usage)

## Installation

It is assumed that you have the [@via-profit-services/core](../core.md) module installed and configured.


You need to install the peer dependencies to:

```bash
$ yarn add @via-profit-services/core
$ yarn add jsonwebtoken uuid
$ yarn add @via-profit-services/authentification
```

## Basic usage

Using the `factory` method, initialize middleware and then connect it. After connecting this middleware, the **Context** object will contain property `token`, which will be a token package. In addition to the moddleware, you need to add resolvers and types of this module.

**Note!**: This middleware should be connected as early as possible, as the order of connection is of great importance.

_index.js_

```js
const { makeExecutableSchema } = require("@graphql-tools/schema");
const core = require("@via-profit-services/core");
const authentification = require("@via-profit-services/authentification");
const express = require("express");
const path = require("path");
const { createServer } = require("http");

const schema = require("./schema");

(async () => {
  const port = 8085;
  const app = express();
  const server = createServer(app);

  const auth = authentification.factory({
    privateKey: path.resolve(__dirname, './keys/jwtRS256.key'), // <-- path to your private key
    publicKey: path.resolve(__dirname, './keys/jwtRS256.key.pub'), // <-- path to your public key
    accessTokenExpiresIn: 1800, // < -- The access token lifetime in seconds)
    roles: ['viewer', 'enemy', 'administrator'], // < -- The roles that will be passed here will be added to the type: enum AccountRole
    checkTokenRevokeFn: () => {...} // < -- This function is run at every request to check if the token is in the blacklist
    createTokenFn: () => {...} // < -- This function is triggered every time an authorization attempt is made
    refreshTokenFn: () => {...} // < -- This function is triggered every time a token refresh is attempted
  });

  const { graphQLExpress } = await core.factory({
    server,
    schema: makeExecutableSchema({
      resolvers: [
        core.resolvers,
        auth.resolvers,
      ],
      typeDefs: [
        core.typeDefs,
        auth.typeDefs,
      ],
    }),
    middleware: [
      auth.middleware,
    ]
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at port ${port}`);
  });
})();
```

[![Edit @via-profit-services-authentification-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-authentification-basic-5stt6?fontsize=14&hidenavigation=1&theme=dark)
