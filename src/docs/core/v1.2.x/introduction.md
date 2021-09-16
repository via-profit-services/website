# Via Profit Services / Core

![via-profit-services-cover](~/assets/images/via-profit-services-cover.svg)

> Via Profit services / **Core** - [GraphQL](https://graphql.org/) server based on [Express](http://expressjs.com) framework

![npm (scoped)](https://img.shields.io/npm/v/@via-profit-services/core?color=blue)
![NPM](https://img.shields.io/npm/l/@via-profit-services/core?color=blue)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@via-profit-services/core?color=green)

## Table of Contents

- [Dependencies](#dependencies)
- [Description](#description)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Options](#options)
- [Scalars](#scalars)
- [Base TypeDefs](#base-typedefs)
- [Connections](#connections)

- [logger](#Logger)
- [Middleware](#middleware)
- [Context](#context)

## Dependencies (peer)

- [Express](https://github.com/expressjs/express) - Node HTTP Server
- [DataLoader](https://github.com/graphql/dataloader) - GraphQL DataLoader
- [Moment](https://github.com/moment/moment) - Date library
- [Moment Timezone](https://github.com/moment/moment-timezone) - Time zone support for Moment
- [Winston](https://github.com/winstonjs/winston) - Logger
- [Winston Daily Rotate File](https://github.com/winstonjs/winston-daily-rotate-file) - A transport for winston which logs to a rotating file

## Description

Lightweight, flexible, standalone implementation of a [GraphQL HTTP (express middleware)](https://github.com/graphql/express-graphql) which allows you to run an Express GraphQL server, build connections with pagination (Cursored or Limit-offset type), make your own extentions, read detailed logs, use global context with structured dataloaders and module containers, use some extra GraphQL Scalar types as DateTime, Money and so on

List of our extentions:

- [accounts](https://github.com/via-profit-services/accounts) This package allows you to store and operate with user accounts and make user authorization. Very useful
- [permissions](https://github.com/via-profit-services/permissions) Standalone and lightweight implementation of [graphql-shield](https://github.com/maticzav/graphql-shield). Beacuse we found it slow.
- [knex](https://github.com/via-profit-services/knex) Adds some useful properties into global context like DB connection instance
- [geography](https://github.com/via-profit-services/geography) Helps you to deal with cities, states and countries. All data included
- [subscriptions](https://github.com/via-profit-services/subscriptions) This package manage GrahpQL subscriptions
- [file-storage](https://github.com/via-profit-services/file-storage) This package helps you to manage files, perporm image transformation, cropping
- [vehicles](https://github.com/via-profit-services/vehicles) This package allows you to store and operate with vehicles data like model and brands. All data included
- [phones](https://github.com/via-profit-services/phones) This package allows you to store and operate with phone numbers
- [redis](https://github.com/via-profit-services/redis) Adds some useful properties into global context like Redis connection instance

You can discover a full list of extentions in our organisation repository [via-profit-services](https://github.com/via-profit-services)

We always use those package in our commercial projects like CRM systems, websites and so on. Any help with development, testing and docs would be highly appreciated.
Our contacts:

LLC Via-Profit

- website: [via-profit.ru](https://via-profit.ru/)
- location: Russia, Yekaterinburg
- email: 1@e1g.ru

## Options

- **server** _(required)_. `http.Server`. Instance of http.Server
- **schema** _(required)_ `GraphQLSchema`. GraphQL schema
- **timezone**. `string`. Server timezone. _Default: `UTC`_
- **logDir**. `string` Path to directory of logs. _Default: `./log`_
- **debug**. `boolean` Displayed error stack and extensions in graphql response. _Default: `false` for production and `true` for development mode_
- **rootValue**. `any` GraphQL parameter of [execute](https://graphql.org/graphql-js/execution/#execute) method.
- **middleware** `Middleware | Middleware[]` - Middleware or array of middlewares. See [Middleware](./#middleware)
- **persistedQueriesMap** `Record`. Persisted Queries map (Object contains key: value pairs). See [Relay Persisted Queries](https://relay.dev/docs/persisted-queries.html). If persisted queries map is passed, the server will ignore the `query` directive in body request and read the map using the `documentId` key, unless otherwise specified (_see `persistedQueryKey` option_).
- **persistedQueryKey** `string`. Used only together with the `persistedQueriesMap` option. The name of the parameter that will be passed the ID of the query in the Persisted Queries map. _Default: `documentId`_

## Scalars

The Core also adds scalar types:

- **Money** - The value is stored in the smallest monetary unit (kopecks, cents, etc.). Real type - Int. E.g. For 250 USD this record returns value as 250000 (250$ \* 100¢)
- **DateTime** - Use JavaScript Date object for date/time fields.
- **Date** - Use JavaScript Date object for date fields.
- **Time** - And Time type.
- **URL** - A field which value conforms to the standard URL format as specified in [RFC3986](https://www.ietf.org/rfc/rfc3986.txt).
- **EmailAddress** - A field which value conforms to the standard internet email address format as specified in [RFC822](https://www.w3.org/Protocols/rfc822/).
- **JSON** - The JSON scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
- **JSONObject** - The JSONObject scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
- **Void** - Represents NULL values

## Base TypeDefs

The Core also adds GraphQL types:

- _interface_ **Node** - entity with required field: `id`. Used in Edges
- _type_ **OrderDirection** - Enum type to make the order (ASC, DESC)
- _type_ **Error** - entity fo display errors
- _type_ **PageInfo** - See [Connection spec.](https://relay.dev/graphql/connections.htm)
- _interface_ **Edge** - See [Connection spec.](https://relay.dev/graphql/connections.htm)
- _interface_ **Connection** - See [Connection spec.](https://relay.dev/graphql/connections.htm)
- _input_ **BetweenDate** - Between `Date` query type
- _input_ **BetweenTime** - Between `Time` query type
- _input_ **BetweenDateTime** - Between `DateTime` query type
- _input_ **BetweenInt** - Between `Int` query type
- _input_ **BetweenMoney** - Between `Money` query type

## Connections

To implement connections, according to the GraphQL [Connection specification](https://relay.dev/graphql/connections.htm), you can use the types and functions included in the package:

In schema (SDL):

**Note:** _GraphQL types `OrderDirection`, `Connection`, `PageInfo`, `Edge` and `Node` already declared in Core typedefs (see: [Base TypeDefs](#base-typedefs))_

```graphql
type Query {
  list(
    first: Int
    offset: Int
    after: String
    orderBy: [UserOrderBy!]
    between: UsersListBetween
    search: [UserFilterSearch!]
    filter: UserListFilter
  ): UserListConnection!
}

"""
Example of User type
"""
type User {
  id: ID!
  name: String!
  login: String!
  status: UserStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""
Example of user status
"""
enum UserStatus {
  active
  inactive
}

"""
Ordering options
"""
input UserOrderBy {
  field: UserOrderField!
  direction: OrderDirection!
}

"""
Ordering fields of UserOrderBy input
"""
enum UserOrderField {
  name
  login
  createdAt
  updatedAt
}

"""
Between filter
"""
input UsersListBetween {
  updatedAt: BetweenDateTime
  createdAt: BetweenDateTime
}

"""
User search filter
"""
input UserFilterSearch {
  field: UserFilterSearchField!
  query: String!
}

"""
Possible fields to search users
"""
enum UserFilterSearchField {
  name
  login
  status
}

"""
Possible data to filter list of users
"""
input UserListFilter {
  id: [ID!]
  status: [UserStatus!]
}

"""
Users list bundle
"""
type UserListConnection implements Connection {
  totalCount: Int!
  pageInfo: PageInfo!
  edges: [UsersEdge!]!
}

"""
User edge bundle
"""
type UsersEdge implements Edge {
  node: User!
  cursor: String!
}
```

In resolvers:

```ts
import { GraphQLFieldResolver } from 'graphql';
import {
  ServerError,
  buildCursorConnection,
  buildQueryFilter,
  CursorConnection,
  Context,
  InputFilter,
} from '@via-profit-services/core';

type Resolvers = {
  Query: {
    list: GraphQLFieldResolver<unknown, Context, InputFilter>;
  };
};

const resolvers: Resolvers = {
  Query: {
    list: async (_parent, args, context) => {
      // convert input arguments to persist filter (See return value of this method)
      // Will be return `OutputFilter` type with normalized props
      // You can use this filter in your Model class
      const filter = buildQueryFilter(args);

      // Your model should return the data for the connection
      // You must provide totalCount and nodes yourself
      // limit, offset, and others can be returned
      // in the same form as received from the buildQueryFilter method
      // to simplify the selection from the database using filters, you
      // can use the package https://github.com/via-profit-services/knex
      const { totalCount, nodes, limit, offset, offset, where } =
        MyModelClass.getUsers(filter);

      // Now you can build the conection object like this:
      // method buildCursorConnection combine and return edges,
      // pageInfo and totalCount values
      const connection = buildCursorConnection({
        totalCount,
        nodes,
        limit,
        offset,
        offset,
        where,
      });

      return connection;
    },
  },
};

export default resolvers;
```

## logger

Logger - is a [Winston](https://github.com/winstonjs/winston) logger instance.

Logger storage in Context only. By default context object contains _server_ logger with transports:

- `warn` - File transport
- `error` - File transport
- `debug` - File transport

_Example of usage in some resolver:_

```ts

const accountsQueryResolver = {
  accountsList: async (parent, args, context) => {
    const { logger } = context;

    logger.server.debug('Some debug message');

    ...
  }
}
```

## Context

Default state of GraphQL [Context](https://graphql.org/learn/execution/):

- **timezone** - Provied with initial properties (See [API](#options)) .Default: `UTC`.
- **logger** - Provied with Winston loaders collection (See [Logger](#logger))
- **dataloader** - Provied with DataLoader loader (See [Middleware](#middleware))
- **services** - Provied with collection of any services that you make (See [Middleware](#middleware))
- **emitter** - Provied with Event Emitter class (See [EventEmitter](#event-emitter))
- **request** - Provied with Express server request (See [Express API](https://expressjs.com/ru/api.html#req))
- **schema** - Provied with GraphQL current schema

You can extend default context value. See [Middleware](#middleware) section for more details.

## Event Emitter

Context contains the `emitter` property by default - [Event Emitter](https://nodejs.org/api/events.html) this class are empty by deafult. You can extend it

## License

The [MIT](./LICENSE) License.
