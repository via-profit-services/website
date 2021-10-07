# Connections and cursor pagination

The core contains a set of types, methods and resolvers that will facilitate the creation and handling of connections as described in the [specification](https://relay.dev/graphql/connections.htm). Contains helpers for implementing cursor pagination and legacy pagination by offset/limit.

**Note: you can use our approach or come up with your own. Everything described below is only a recommendation. You have the right to act at your discretion.**

In order to create a connection, you must first declare a schema:

_Note: GraphQL types OrderDirection, Connection, PageInfo, Edge, Node and etc. already declared in Core typedefs (see: [TypeDefs](./typedefs.md))_

```graphql
type Query {
  list(
    first: Int
    last: Int
    after: String
    before: String
    offset: Int
    orderBy: [UserOrderBy!]
    between: UsersListBetween
    search: [UserFilterSearch!]
    filter: UserListFilter
  ): UserListConnection!
}

"""
Example of User type
"""
type  implements Node {
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

**Note:** As you can see, the field `list` has the following set of arguments:

 - first - pagination argument as per GraphQl specification
 - last - pagination argument as per GraphQl specification
 - after - pagination argument as per GraphQl specification
 - before - pagination argument as per GraphQl specification
 - offset - pagination argument. Offset value to be passed to PostgreSQL query (`select * from users offset 3 limit 100`)
 - orderBy - an argument that is analogous to the ORDER BY statement in SQL
 - between - an argument that is analogous to the BETWEEN statement in SQL
 - search - the argument contains the search terms
 - filter - an argument that is analogous to the WHERE statement in SQL

We use exactly this structure of arguments. The core module contains several useful methods for processing incoming parameters.

Now you can create a resolvers for this schema:

```js
import { buildQueryFilter, buildCursorConnection } from '@via-profit-services/core';

const resolvers = {
  Query: {
    list: async (_parent, args, context) => {
      // convert input arguments to persist filter (See return value of this method)
      // Will be return `OutputFilter` type with normalized props
      // You can use this filter in your Model class
      const { limit, offset, offset, where, revert, orderBy } = buildQueryFilter(args);

      // Your model should return the data for the connection
      // You must provide totalCount and nodes yourself
      // limit, offset, and others can be returned
      // in the same form as received from the buildQueryFilter method
      // to simplify the selection from the database using filters, you
      // can use the package https://github.com/via-profit-services/knex
      const { totalCount, nodes } = MyModelClass.getUsers({
        where,
        limit,
        offset,
        orderBy,
      });

      // Now you can build the conection object like this:
      // method buildCursorConnection combine and return edges,
      // pageInfo and totalCount values
      const connection = buildCursorConnection({
        totalCount,
        nodes,
        limit,
        offset,
        where,
        revert,
        orderBy,
      });

      // connection const will be like this: {
      //   totalCount: 20,
      //   edges: [{ id: '1', name: 'Leo' }, {id: '2', name: 'Raph'}],
      //   pageInfo: {
      //     startCursor: '=JHKJ',
      //     endCursor: '==JHKdJ',
      //     hasPreviousPage: false,
      //     hasNextPage: true,
      //   },
      // }
      return connection;
    },
  },
};
```

In the example above, we are using two methods exported from the core: `buildQueryFilter` and `buildCursorConnection`.


## Typescript

For the resolver described above, you can use the following types:

```ts
import type { GraphQLFieldResolver } from 'graphql';
import type { CursorConnection, Context, InputFilter } from '@via-profit-services/core';

type Resolvers = {
  Query: {
    list: GraphQLFieldResolver<unknown, Context, InputFilter>;
  },
};
```
