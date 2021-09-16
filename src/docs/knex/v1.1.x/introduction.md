# Via Profit services / Knex Provider

> Via Profit services / **Knex** - Database provider. At this time sipports PostgreSQL only.

![npm (scoped)](https://img.shields.io/npm/v/@via-profit-services/knex?color=blue)
![NPM](https://img.shields.io/npm/l/@via-profit-services/knex?color=blue)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@via-profit-services/knex?color=green)

## Table of Contents

- [Overview](#overview)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Options](#options)
- [Logger](#logger)
- [API](#api)

## Overview

This module is a provider that extends the GraphQL [Сontext](https://github.com/via-profit-services/core/blob/master/README.md#context) by adding `Knex` instance with an already initialized connection to your database. A logger named `sql` will also be added to the context (see: [Logger](#logger)).

In addition, the module exports several auxiliary functions _(See [API](#api) section for details)_.

## Dependencies (Peer)

- [Core](https://github.com/via-profit-services/core) - Main GraphQL Server
- [Knex](https://github.com/knex/knex) - A SQL query builder
- [Node Postgress](https://github.com/brianc/node-postgres) - PostgreSQL client

## Installation

You need to install the peer dependencies to:

```bash
$ yarn add knex pg @via-profit-services/core @via-profit-services/knex
```

## Getting Started

First - Initialize module factory and apply middleware.

_index.ts_

```ts
import { factory } from '@via-profit-services/core';
import * as knex from '@via-profit-services/knex';

(async () => {

 // initialize knex factory to get knex middleware for Core
  const knexMiddleware = knex.factory({
    connection: {
      user: 'dbuser',
      database: 'dbname',
      password: 'secret',
      host: 'localhost',
    },
  });

  const { graphQLExpress } = await factory({
    ...
    middleware: [
      knexMiddleware, // <-- put knex middleware here
    ],
  });
})();

```

Now you can use knex instance in your resolvers

_version-resolver.ts_

```ts
import type { Context } from '@via-profit-services/core';
import type { GraphQLFieldResolver } from 'graphql';

const versionResolver = async (parent, args, context) => {
  const { knex } = context;
  const version = await knex('versions').select().first();

  return version;
};
```

## Options

- **connection** _(required)_. PostgreSQL connection params.
  - **user**. `string`. Database username. Default: `process.env.USER` (_process.env.USERNAME if is win32 platform_).
  - **database**. `string`. Database name.
  - **password**. `string | (() => string | Promise<string>)` . Database password. Default: `null`.
  - **port**. `number`. Database port. Default: `5432`.
  - **host**. `string`. Database host. Default: `localhost`.
  - **connectionString**. `string`. Connection URI, e.g. `postgresql://dbuser:secretpassword@database.server.com:3211/mydb`.
  - **keepAlive**. `boolean`. Default: `false`.
  - **stream**. `stream.Duplex`.
  - **statement_timeout**. `false | number`.
  - **connectionTimeoutMillis**. `number`. Default: `0`.
  - **keepAliveInitialDelayMillis**. `number`. Default: `0`.
  - **ssl**. `boolean | ConnectionOptions`. Default: `false`.
- **timezone**. `String`. Database server timezone. Default: `UTC`.
- **localTimezone**. `String`. Local server timezone. Used for convert `timestamp` and `timestamptz` entities to local `Date`. Default: `UTC`.
- **enablePgTypes**. `String`. Used for convert `timestamp` and `timestamptz` entities to local `Date`. This option use `localTimezone` property. Default: `true`.
- **migrations**. Knex migrations config.
  - **directory** `string | string[]`. A relative path to the directory containing the migration files. Can be an array of paths. Default: `./migrations`.
  - **tableName** `string`. The table name used for storing the migration state. Default: `knex_migrations`.
  - **extension** `string`. The file extension used for the generated migration files. Default: `js`.
  - **schemaName** `string`. The schema name used for storing the table with migration state. Default: `null`.
  - **disableTransactions** `boolean`. Don't run migrations inside transactions. Default: `false`.
  - **disableMigrationsListValidation** `boolean`. Do not validate that all the already executed migrations are still present in migration directories. Default: `false`.
  - **sortDirsSeparately** `boolean`. If true and multiple directories are specified, all migrations from a single directory will be executed before executing migrations in the next folder. Default: `false`.
  - **loadExtensions** `string[]`. Array of file extensions which knex will treat as migrations. For example, if you have typescript transpiled into javascript in the same folder, you want to execute only javascript migrations. In this case, set loadExtensions to ['.js'] **(Notice the dot!)**. Default: `['.co', '.coffee', '.eg', '.iced', '.js', '.litcoffee', '.ls', '.ts']`.
  - **migrationSource** `MigrationSource<unknown>`. Specify a custom migration source, see [Custom Migration Source](http://knexjs.org/#custom-migration-sources) for more info. Default: _filesystem_.
  - **stub** `string`. Migrations stub filename. Default: `undefined`
- **seeds**. Knex seeds config.
  - **directory** `string | string[]`. a relative path to the directory containing the seed files. Can be an array of paths. Default: `./seeds`.
  - **extension** `string`. The file extension used for the generated seed files. Default: `js`.
  - **loadExtensions** `string[]`. Array of file extensions which knex will treat as seeds. For example, if you have typescript transpiled into javascript in the same folder, you want to execute only javascript seeds. In this case, set loadExtensions to ['.js'] **(Notice the dot!)**. Default: `['.co', '.coffee', '.eg', '.iced', '.js', '.litcoffee', '.ls', '.ts']`.
  - **recursive** `boolean`. If true, will find seed files recursively in the directory/directories specified. Default: `false`.
  - **specific** `string`. A specific seed file to run from the seeds directory, if its value is undefined it will run all the seeds. Default: `undefined`.
  - **sortDirsSeparately** `boolean`. If true and multiple directories are specified, all seeds from a single directory will be executed before executing seeds in the next folder. Default: `false`.
  - **timestampFilenamePrefix** `boolean`. If true, all seeds files will be prefixed with a timestamp `yyyymmddhhmmss_` (e.g. `20191231235959_myseed.js`). Default: `false`.
  - **stub** `string`. Seeds stub filename. Default: `undefined`.
- **pool**. Knex Pooling.
  - **afterCreate** `(rawDriverConnection, done) => void`. Is called when the pool aquires a new connection from the database server. `done(err, connection)` callback must be called for `knex` to be able to decide if the connection is ok or if it should be discarded right away from the pool. By default, a function will be called that will set parameters such as: `SET TIMEZONE = ${timezone}` () and `SET CLIENT_ENCODING = UTF8`.
  - **min** `number`. Minimum size. Default: `2`.
  - **max** `number`. Maximum size. Default: `10`.
  - **idleTimeoutMillis** `number`. Free resouces are destroyed after this many milliseconds. Default: `30000`.
  - **reapIntervalMillis** `number`. How often to check for idle resources to destroy. Default: `1000`.
  - **propagateCreateError** `boolean`. If true, when a create fails, the first pending acquire is rejected with the error. If this is false then create is retried until `acquireTimeoutMillis` milliseconds has passed. Default: `true`.
  - **createRetryIntervalMillis** `number`. How long to idle after failed create before trying again. Default: `200`.
  - **createTimeoutMillis** `number`. Create operations are cancelled after this many milliseconds if a resource cannot be acquired. Default: `30000`.
  - **destroyTimeoutMillis** `number`. Destroy operations are awaited for at most this many milliseconds new resources will be created after this timeout. Default: `5000`.
  - **acquireTimeoutMillis** `number`. Acquire promises are rejected after this many milliseconds if a resource cannot be acquired. Default: `30000`.
- **queryTimeLimit**. When the specified query execution speed limits are reached, Knex provider will mark the corresponding query as `normal`, `slow` or `panic`.
  - **slow** `number`. Default: `201`.
  - **panic** `number`. Default: `1001`.
- **pingTimeout**. Database ping timeout in milliseconds. Default: `900000` (15 minutes).

## Logger

[Logger](https://github.com/via-profit-services/core/blob/master/README.md#logger) named `sql` will also be added to the context.

Logger has been transports:

- `debug` - File transport
- `error` - Console transport

```ts
const resolver = async (parent, args, context) => {
  const { logger } = context;

  logger.sql.debug('Some message');

  return {};
};
```

## License

The [MIT](./LICENSE) License.
