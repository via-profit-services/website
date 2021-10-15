# API

You can use helpers by exporting them from the module:

```ts
import {
  factory,
  resolvers,
  logFormatter,
  buildQueryFilter,
} from '@via-profit-services/core';
```

## factory

Function returns object contains `graphQLExpress` - express middleware.

_Example of usage:_

```ts
import { factory } from '@via-profit-services/core';
import express from 'express';
import http from 'http';

const server = http.createServer();
const app = express();
const { graphQLExpress } = factory({
  server,
  schema,
});

app.use('/graphql', graphQLExpress);
server.listen(9000);
```

## resolvers

Resolvers object contains:

- [Scalars](#scalars) resolvers
- Root `Query` resolvers
  - `core` - Returns core version
- Root `Mutation` resolvers
  - `echo` - Returns passed string

## typeDefs

`SDL` string with definitions of [Scalars](#scalars) and [Base TypeDefs](base-typedefs)

## logFormatter

[Winston](https://github.com/winstonjs/winston#combining-formats) Combining formats data to use in loggers

## buildQueryFilter

Convert input filter (partial from GraphQL request) into persist filter

## arrayOfIdsToArrayOfObjectIds

Format array of IDs into object with id key

```ts
const ids = arrayOfIdsToArrayOfObjectIds(['1', '2', '3']);

console.log(ids); // <-- [{id: '1'}, {id: '2'}, {id: '3'}]
```

## collateForDataloader

Collate rows for dataloader response
_From DataLoader docs:_
There are a few constraints this function must uphold:

- The Array of values must be the same length as the Array of keys.
- Each index in the Array of values must correspond to the same index in the Array of keys.
  For details [here](https://github.com/graphql/dataloader#batch-function)

```ts
const dataloader = new DataLoader(async (ids: string[]) => {
  const nodes = await context.services.accounts.getUsersByIds(ids);

  return collateForDataloader(ids, nodes);
});
```

## extractNodeIds

Returns node IDs array

```ts
const ids = extractNodeIds([
  { id: '1', name: 'Ivan' },
  { id: '2', name: 'Stepan' },
  { id: '3', name: 'Petruha' },
]);

console.log(ids); // <-- ['1', '2', '3'];
```

## extractNodeField

Return array of fields of node

```ts
const persons = [
  { id: '1', name: 'Ivan' },
  { id: '2', name: 'Stepan' },
  { id: '3', name: 'Petruha' },
];

const names = extractNodeField(persons, 'name');
console.log(names); // <-- ['Ivan', 'Stepan', 'Petruha']
```

## nodeToEdge

Wrap node to cursor object

```ts
const filter = {
  offset: 0,
  limit: 15,
  where: [],
  orderBy: [
    {
      field: 'name',
      direction: 'desc',
    },
  ],
};

// Get persons list
const persons = await service.getPersons(filter);

// Map all persons to compile the edge for each
const edges = persons.map(person => {
  // You should passed node, cursor name and filter params
  return nodeToEdge(person, 'persons-cursor', filter);
});
console.log(edges); // <-- [{ cursor: 'XGHJGds', node: { id: '1', name: 'Ivan' } }]
```

## stringToCursor

Just encode base64 string
_Internal function. Used for GraphQL connection building_

```ts
const cursor = stringToCursor(JSON.stringify({ foo: 'bar' }));
console.log(cursor); // <-- eyJmb28iOiJiYXIifQ==
```

## cursorToString

Just decode base64 string
_Internal function. Used for GraphQL connection building_

```ts
const data = cursorToString('eyJmb28iOiJiYXIifQ==');
console.log(data); // <-- '{"foo":"bar"}'
```

## makeNodeCursor

Returns cursor base64 cursor string by name and cursor payload

```ts
const cursor = makeNodeCursor('persons-cursor', {
  offset: 0,
  limit: 15,
  where: [],
  orderBy: [
    {
      field: 'name',
      direction: 'desc',
    },
  ],
});
console.log(cursor); // <-- eyJvZmZzZXQiOjAsImxpbWl0IjoxNSwid2h...
```

## getCursorPayload

Convert string to cursor base64 string and return payload

```ts
const payload = getCursorPayload('eyJvZmZzZXQiOjA...');
console.log(payload);
/**
 * {
 *   offset: 0,
 *   limit: 15,
 *   where: [],
 *   orderBy: [ { field: 'name', direction: 'desc' } ]
 * }
 */
```

## buildCursorConnection

Returns Relay cursor bundle

```ts
const cursorBundle = buildCursorConnection(
  {
    totalCount: 3,
    offset: 0,
    limit: 2,
    nodes: [
      { id: '1', name: 'Ivan', createdAt: new Date(), updatedAt: new Date() },
      { id: '2', name: 'Stepan', createdAt: new Date(), updatedAt: new Date() },
    ],
  },
  'persons-cursor',
);

console.log(cursorBundle);
/**
 * {
 *   totalCount: 3,
 *   edges: [
 *     {
 *       node: { id: '1', name: 'Ivan', ... },
 *       cursor:  'eyJvZmZzZXQiOjEsImxpbWl0Ijoy...'
 *     },
 *     {
 *       node: { id: '2', name: 'Stepan', ... },
 *       cursor:  'eyJvZmZzZXQiOjIsImxpbWl0Ij...'
 *     }
 *   ],
 *   pageInfo: {
 *     startCursor:  'eyJvZmZzZXQiOjEsImxpbWl0Ijoy...',
 *     endCursor:  'eyJvZmZzZXQiOjIsImxpbWl0Ij...',
 *     hasPreviousPage: false,
 *     hasNextPage: true
 *   }
 * }
 */
```

## extractKeyAsObject

Creates an object which contains a specific key

```ts
const source = {
  foo: 'Foo',
  bar: 12,
};
const record = extractKeyAsObject(source, 'bar');

console.log(record); // <-- { bar: 12 }
```

## LOG_FILENAME_DEBUG

Contains filename of logger debug level (`debug-%DATE%.log`).

## LOG_FILENAME_ERRORS

Contains filename of logger error level (`errors-%DATE%.log`).

## LOG_FILENAME_WARNINGS

Contains filename of logger warning level (`warnings-%DATE%.log`).

## LOG_DATE_PATTERNT

Contains log date pattern string (`YYYY-MM-DD`).

## LOG_MAX_SIZE

Contains log date pattern string (`YYYY-MM-DD`).
