# Core API

You can use helpers by exporting them from the module:

```js
import { factory, resolvers, buildQueryFilter } from '@via-profit-services/core';
```

## Table of contents

 - [factory](#factory)
 - [resolvers](#resolvers)
 - [typeDefs](#typedefs)
 - [defaultOutputFilter](#defaultoutputfilter)
 - [buildQueryFilter](#buildqueryfilter)
 - [arrayOfIdsToArrayOfObjectIds](#arrayofidstoarrayofobjectids)
 - [collateForDataloader](#collatefordataloader)
 - [extractNodeIds](#extractnodeids)
 - [extractNodeField](#extractnodefield)
 - [nodeToEdge](#nodetoedge)
 - [stringToCursor](#stringtocursor)
 - [cursorToString](#cursortostring)
 - [makeNodeCursor](#makenodecursor)
 - [getCursorPayload](#getcursorpayload)
 - [buildCursorConnection](#buildcursorconnection)
 - [extractKeyAsObject](#extractkeyasobject)
 - [fieldsWrapper](#fieldswrapper)


### factory


Function returns object contains `graphQLExpress` - express middleware.

_Example of usage:_

```js
const { factory } = require('@via-profit-services/core');
const express = require('express');
const http = require('http');

(async () => {
  const app = express();
  const server = http.createServer(app);
  const port = 8080;

  const { graphQLExpress } = await core.factory({
    server,
    schema
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at http://localhost:${port}/graphql`);
  });
})();
```

### resolvers

Resolvers object contains:
 - [Scalars](#scalars) resolvers
 - Root `Query` resolvers
   - `core` - Returns core version
 - Root `Mutation` resolvers
   - `echo` - Returns passed string

### typeDefs

`SDL` string with definitions of [Scalars](#scalars) and [Base TypeDefs](base-typedefs)

### defaultOutputFilter

`OutputFilter` containing the default values

### buildQueryFilter

Convert input filter (partial from GraphQL request) into persist filter

### arrayOfIdsToArrayOfObjectIds

Format array of IDs into object with id key

```js
const ids = arrayOfIdsToArrayOfObjectIds(['1', '2', '3']);

console.log(ids); // <-- [{id: '1'}, {id: '2'}, {id: '3'}]
```

### collateForDataloader

Collate rows for dataloader response
*From DataLoader docs:*
There are a few constraints this function must uphold:
  - The Array of values must be the same length as the Array of keys.
  - Each index in the Array of values must correspond to the same index in the Array of keys.
For details [here](https://github.com/graphql/dataloader#batch-function)

```js
const dataloader = new DataLoader(async ids => {
  const bananas = await context.services.fruits.getBananas(ids);

  return collateForDataloader(ids, bananas);
});
```

### extractNodeIds

Returns node IDs array

```js
const ids = extractNodeIds([
  {id: '1', name: 'Leo'},
  {id: '2', name: 'Raph'},
  {id: '3', name: 'Mikey'},
]);

console.log(ids); // <-- ['1', '2', '3'];
```


### extractNodeField

Return array of fields of node

```js
const persons = [
  {id: '1', name: 'Leo'},
  {id: '2', name: 'Raph'},
  {id: '3', name: 'Mikey'},
];

const names = extractNodeField(persons, 'name');
console.log(names); // <-- ['Leo', 'Raph', 'Mikey']
```


### nodeToEdge

Wrap node to cursor object

```js
const filter = {
  offset: 0,
  limit: 15,
  where: [],
  orderBy: [{
    field: 'name',
    direction: 'desc',
  }],
}

// Get persons list
const persons = await service.getPersons(filter);

// Map all persons to compile the edge for each
const edges = persons.map(person => {

  // You should passed node, cursor name and filter params
  return nodeToEdge(person, 'persons-cursor', filter);
});
console.log(edges); // <-- [{ cursor: 'XGHJGds', node: { id: '1', name: 'Leo' } }]

```

### stringToCursor

Just encode base64 string
_Internal function. Used for GraphQL connection building_

```js
const cursor = stringToCursor(JSON.stringify({ foo: 'bar' }));
console.log(cursor); // <-- eyJmb28iOiJiYXIifQ==
```

### cursorToString

Just decode base64 string
_Internal function. Used for GraphQL connection building_

```js
const data = cursorToString('eyJmb28iOiJiYXIifQ==');
console.log(data); // <-- '{"foo":"bar"}'
```

### makeNodeCursor

Returns cursor base64 cursor string by name and cursor payload

```js
const cursor = makeNodeCursor('persons-cursor', {
  offset: 0,
  limit: 15,
  where: [],
  orderBy: [{
    field: 'name',
    direction: 'desc',
  }],
});
console.log(cursor); // <-- eyJvZmZzZXQiOjAsImxpbWl0IjoxNSwid2hlcmUiOltdLCJvcmRlckJ5IjpbeyJmaWVsZCI6Im5hbWUiLCJkaXJlY3Rpb24iOiJkZXNjIn1dfS0tLXBlcnNvbnMtY3Vyc29y
```

### getCursorPayload

Convert string to cursor base64 string and return payload

```js
const payload = getCursorPayload('eyJvZmZzZXQiOjAsImxpbWl0IjoxNSwid2hlcmUiOltdLCJvcmRlckJ5IjpbeyJmaWVsZCI6Im5hbWUiLCJkaXJlY3Rpb24iOiJkZXNjIn1dfS0tLXBlcnNvbnMtY3Vyc29y')
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

### buildCursorConnection

Returns Relay cursor bundle

```js
const cursorBundle = buildCursorConnection({
  totalCount: 3,
  offset: 0,
  limit: 2,
  nodes: [
    { id: '1', name: 'Leo', createdAt: new Date(), updatedAt: new Date() },
    { id: '2', name: 'Mikey', createdAt: new Date(), updatedAt: new Date() },
  ]
}, 'nonja-cursor');

console.log(cursorBundle);
/**
 * {
 *   totalCount: 3,
 *   edges: [
 *     {
 *       node: { id: '1', name: 'Leo', ... },
 *       cursor:  'eyJvZmZzZXQiOjEsImxpbWl0Ijoy...'
 *     },
 *     {
 *       node: { id: '2', name: 'Mikey', ... },
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

### extractKeyAsObject

Creates an object which contains a specific key

```js
const source = {
  foo: 'Foo',
  bar: 12,
};
const record = extractKeyAsObject(source, 'bar');

console.log(record); // <-- { bar: 12 }
```

### fieldsWrapper

Wrap types resolvers in schema. You can wrap types without resolvers - will be created noop-resolver to wrap the field.

**Note:** The resolver function should return all the received parameters.

```js
const { graphQLExpress } = await factory({
  server,
  schema,
  middleware: [
    ({ schema }) => ({
      schema: fieldsWrapper(schema, (params) => {
        const { resolver, source, args, context, info } = params;
        // Do something

        return params;
      })
    }),
  ],
});
```