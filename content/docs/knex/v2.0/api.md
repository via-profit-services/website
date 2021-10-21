# Knex Api


## Table of contents

 - [factory](#factory)



### factory

Function returns [Middleware](https://github.com/via-profit-services/core/blob/master/README.md#middleware).

Arguments:
 - An object containing:
  - **client** *(required)* `string`. One of the variants: `pg`; `mysql`; `sqlite3`; `mysql2`; `oracledb`; `tedious`.
  - **connection** *(required)*. Knex connection params.
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
  - **migrations**. Knex migrations config.
    - **directory** `string | string[]`. A relative path to the directory containing the migration files. Can be an array of paths. Default: `./migrations`.
    - **tableName** `string`. The table name used for storing the migration state. Default: `knex_migrations`.
    - **extension** `string`. The file extension used for the generated migration files. Default: `js`.
    - **schemaName** `string`. The schema name used for storing the table with migration state. Default: `null`.
    - **disableTransactions** `boolean`. Don't run migrations inside transactions. Default: `false`.
    - **disableMigrationsListValidation** `boolean`. Do not validate that all the already executed migrations are still present in  migration directories. Default: `false`.
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
    - **afterCreate** `(rawDriverConnection, done) => void`. Is called when the pool aquires a new connection from the database server. `done(err, connection)` callback must be called for `knex` to be able to decide if the connection is ok or if it should be discarded right away from the pool. By default, a function will be called that will set parameters such as: `SET TIMEZONE = UTC` () and `SET CLIENT_ENCODING = UTF8`.
    - **min** `number`. Minimum size. Default: `0`.
    - **max** `number`. Maximum size. Default: `10`.
    - **idleTimeoutMillis** `number`. Free resouces are destroyed after this many milliseconds. Default: `10000`.
    - **reapIntervalMillis** `number`. How often to check for idle resources to destroy. Default: `1000`.
    - **propagateCreateError** `boolean`. If true, when a create fails, the first pending acquire is rejected with the error. If this is false then create is retried until `acquireTimeoutMillis` milliseconds has passed. Default: `true`.
    - **createRetryIntervalMillis** `number`. How long to idle after failed create before trying again. Default: `200`.
    - **createTimeoutMillis** `number`. Create operations are cancelled after this many milliseconds if a resource cannot be acquired. Default: `30000`.
    - **destroyTimeoutMillis** `number`. Destroy operations are awaited for at most this many milliseconds new resources will be created after this timeout. Default: `5000`.
    - **acquireTimeoutMillis** `number`. Acquire promises are rejected after this many milliseconds if a resource cannot be acquired. Default: `10000`.
  - **queryTimeLimit**. When the specified query execution speed limits are reached, Knex provider will mark the corresponding query as `normal`, `slow` or `panic`.
    - **slow** `number`. Default: `201`.
    - **panic** `number`. Default: `1001`.


```js
const knexMiddleware = factory({
  connection: {
    user: 'dbuser',
    database: 'dbname',
    password: 'secret',
    host: 'localhost',
  },
});
```

### convertOrderByToKnex

Convert OrderBy array to Knex Order by format

Arguments:
 - An array of objects *(required)*:
   - **field** `string` - table field name
   - **direction** `string` - one of the value: `asc` or `desc`.
 - aliases - Table aliases map. Key - is a alias name. Value - is a field alias name or array of names. Use asterisk (`*`) for default alias name. Use `none` as alias name to skip alias for specific column
   
Returns:
  Array of knex format (`[{ column: 'name', order: 'asc' }]`)

```js
const orderBy = [{
  field: 'name',
  direction: 'asc',
}];

const aliases = {
  books: ['name', 'author'],
};

// without aliases
await knex
  .select(['*'])
  .from('books')
  .orderBy(convertOrderByToKnex(orderBy)); // <-- [{ column: 'name', order: 'asc' }]

// with aliases
await knex
  .select(['books.*', 'users.*'])
  .from('books')
  .leftJoin('users', 'users.id', 'books.author')
  .orderBy(convertOrderByToKnex(orderBy, aliases)); // <-- [{ column: 'books.name', order: 'asc' }]
```


### convertJsonToKnex

Convert object or JSON string to Knex Raw

Arguments:
 - *(required)* Knex instance
 - *(required)* data to be converted to JSON

Returns:
  - `knex.raw` instance

```js
await knex('books').update({
  title: 'About The Kitchen',
  jsonbColumn: convertJsonToKnex(knex, {
    foo: 'bar',
  }),
});

```

### convertBetweenToKnex

Convert `Between` data to knex builder data

Arguments:
  - *(required)* - Knex QueryBuilder
  - *(required)* - Object betweens map. Key - is a field name. Value - is an onbject containing:
    - **start** - `Date` or `string` or `number`.
    - **end** - `Date` or `string` or `number`.
  - An options object:
    - **aliases** - Table aliases map. Key - is a alias name. Value - is a field alias name or array of names. Use asterisk (`*`) for default alias name. Use `none` as alias name to skip alias for specific column

Returns:
 - Knex QueryBuilder

```js
const between = {
  pages: {
    start: 300,
    end: 800,
  }
};

await knex
  .select(['id', 'name', 'pages', 'author'])
  .from('books')
  .where((builder) => convertBetweenToKnex(builder, between));

```

In third argument you can passed options:

 - **aliases** `TableAliases`. See `applyAliases` API.


### convertWhereToKnex

Convert `Where` clause to knex builder

Arguments:
 - Knex QueryBuilder
 - Wnere clause array
 - Aliases array

```js
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
];

await knex
  .select(['*'])
  .from('books')
  .where((builder) => convertWhereToKnex(builder, where));

```

### convertSearchToKnex

Convert `OutputSearch` to knex builder

Arguments:
 - **(required)** Knex QueryBuilder
 - **(required)** An array of objects containing:
   - **field** - `string` - Field name
   - **query** - `string` Search query string
 - Aliases array
 - An object containing:
  - **strategy** - One of value: `from-start` or `to-end` or `blurry` or `explicit`
  - **splitWords** - `boolean`. Should the search string be divided into words

Returns:
  - Knex QueryBuilder

```js
const search = [{
  field: 'title',
  query: 'kitchen',
}];

// You can use aliases
const aliases = {
  books: ['title'],
};

await knex
  .select(['*'])
  .from('books')
  .where((builder) => convertSearchToKnex(builder, search, aliases, {
    strategy: 'blurry',
    splitWords: true,
  }));

```

### applyAliases

Apply aliases map to where clause array

Arguments:
 - **(required)** Where clause array
 - **(required)** An array of aliases

Returns:
  An where clause array with aliases

```js
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
  ['author', 'is not null'],
];

const aliases = {
  books: ['year', 'pages'],
  author: ['author'],
}
const where = applyAliases(where, aliases);
```

You can use asterisk (`*`) for default alias name:

```js
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
  ['author', 'is not null'],
];

const aliases = {
  books: [*],
  author: ['author'],
}
const where = applyAliases(where, aliases);
```


Use `none` as alias name to skip alias for specific column:
ex. u might be use it if u want to perform search/filtering to generated columns
```js
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
  ['nameGenerated', 'is not null'],
];

const aliases = {
  none: ['nameGenerated'],
  books: [*],
}
const where = applyAliases(where, aliases);
```

### extractTotalCountPropOfNode

Extract `totalCount` property from array of Nodes\

Convert this:
```js
[
 { id: '1', createdAt: 'XXX', updatedAt: 'XXX', totalCount: 2 },
 { id: '2', createdAt: 'XXX', updatedAt: 'XXX', totalCount: 2 },
]
```
To:
```js
{
  totalCount: 2,
  nodes: [
     { id: '1', createdAt: 'XXX', updatedAt: 'XXX' },
     { id: '2', createdAt: 'XXX', updatedAt: 'XXX' },
  ],
}
```

Arguments:
 - **(required)** An array of objects containing `totalCount` property and other.

Returns:
  An object containing:
    - **totalCount** - `totalCount` value
    - **nodes** - An array of objects without `totalCount` property
