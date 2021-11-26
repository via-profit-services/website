# Getting Started

## Table of contents

- [Installation](#installation)
- [Basic usage](#basic-usage)

## Installation

It is assumed that you have the [@via-profit-services/core](../core.md) module installed and configured.

You need to install the peer dependencies to:

```bash
$ yarn add knex
$ yarn add @via-profit-services/knex
```

Install the appropriate database library: [pg](https://github.com/brianc/node-postgres) for PostgreSQL and Amazon Redshift, [mysql](https://github.com/felixge/node-mysql) for MySQL or MariaDB, [sqlite3](https://github.com/mapbox/node-sqlite3) for SQLite3, or [tedious](https://github.com/tediousjs/tedious) for MSSQL.

```bash
# Then add one of the following flag:
$ yarn add pg
$ yarn add sqlite3
$ yarn add mysql
$ yarn add mysql2
$ yarn add oracledb
$ yarn add tedious
```

If you want to use a MariaDB instance, you can use the mysql driver.


## Basic usage

Using the `factory` method, initialize middleware and then connect it. After connecting this middleware, the **Context** object will contain property `knex`, which will be a Knex instance

_Note: See the [factory api](./api.md#factory) for details on parameters_


_index.js_

```js
const core = require("@via-profit-services/core");
const knex = require("@via-profit-services/knex");
const express = require("express");
const { createServer } = require("http");

const schema = require("./schema");

(async () => {
  const port = 8085;
  const app = express();
  const server = createServer(app);

  const knexMiddleware = knex.factory({
    client: "sqlite3",
    connection: {
      filename: "database.sqlite",
    }
  });

  const { graphQLExpress } = await core.factory({
    server,
    schema,
    middleware: [
      knexMiddleware
    ]
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at port ${port}`);
  });
})();
```

_resolver.js_

```js
const UsersResolver = async (_parent, _args, context) => {
  const { knex } = context;
  const users = await knex('users').select();

  return users;
};
```


[![Edit @via-profit-services-knex-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-knex-basic-i8ebn?fontsize=14&hidenavigation=1&theme=dark)
