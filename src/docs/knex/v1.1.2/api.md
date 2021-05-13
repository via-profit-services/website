
# API

You can use helpers by exporting them from the module:

```ts
import { factory, convertBetweenToKnex, convertWhereToKnex } from '@via-profit-services/knex';
```

## factory

Function returns [Middleware](https://github.com/via-profit-services/core/blob/master/README.md#middleware).

```ts
const knexMiddleware = factory({
  connection: {
    user: 'dbuser',
    database: 'dbname',
    password: 'secret',
    host: 'localhost',
  },
});
```

## convertOrderByToKnex

Convert OrderBy array to Knex Order by format

```ts
const orderBy = [{
  field: 'name',
  direction: 'asc',
}];

await knex
  .select(['*'])
  .from('books')
  .orderBy(convertOrderByToKnex(orderBy)); // <-- [{ column: 'name', order: 'asc' }]

```

## convertJsonToKnex

Convert object or JSON string to Knex Raw

```ts
await knex('books').update({
  title: 'About The Kitchen',
  jsonbColumn: convertJsonToKnex(knex, {
    foo: 'bar',
  }),
});

```

## convertBetweenToKnex

Convert `Between` data to knex builder data

```ts

const between = {
  pages: {
    start: 300,
    end: 800,
  }
};

await knex
  .select(['*'])
  .from('books')
  .where((builder) => convertBetweenToKnex(builder, between));

```

In third argument you can passed options:

 - **timezone** `string`. used with operations between dates
 - **aliases** `TableAliases`. See `applyAliases` API.


## convertWhereToKnex

Convert `Where` clause to knex builder

```ts
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
];

await knex
  .select(['*'])
  .from('books')
  .where((builder) => convertWhereToKnex(builder, where));

```

## convertSearchToKnex

Convert `OutputSearch` to knex builder

```ts
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
  .where((builder) => convertSearchToKnex(builder, search, aliases));

```

## applyAliases

Apply aliases map to where clause array

```ts
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
  ['author', 'is not null'],
];

const aliases = {
  books: ['year', 'pages'],
  author: ['author'],
}
const where = applyAliases();
```

You can use asterisk (`*`) for default alias name:

```ts
const where = [
  ['year', '=', 1992],
  ['pages', '>', 30],
  ['author', 'is not null'],
];

const aliases = {
  books: [*],
  author: ['author'],
}
const where = applyAliases();
```

## extractTotalCountPropOfNode

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

## DATABASE_CHARSET

Database charset (`UTF8`)

## DATABASE_CLIENT

Knex client name (`pg`)

## DEFAULT_TIMEZONE

Default database timezone (`UTC`)