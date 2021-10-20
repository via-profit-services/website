# Context

## Table of contents

- [Overview](#overview)
- [Core Event emitter](#core-event-emitter)
- timezone property
- services property
- request property
- schema property

## Overview

`Context` - A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database ([graphql.org][https://graphql.org/learn/execution/#root-fields-resolvers]).

According to the graphql spec, each resolver receives the following set of arguments:

 - parent (first argument) - Object that was returned in the previous resolver.
 - args (second argument) - The arguments provided to the field in the GraphQL query.
 - **context** (third argument) - A value which is provided to every resolver and holds important contextual information.
 - info (fourth argument) - A value which holds field-specific information relevant to the current query as well as the schema details. See [type GraphQLResolveInfo](https://graphql.org/graphql-js/type/#graphqlobjecttype) for more details.


The baseline state of the context contains:

 - `emitter` - [CoreEmitter](#core-event-emitter);
 - `timezone` - timezone string
 - `services` - ServicesCollection;
 - `request` - Request;
 - `schema` - GraphQLSchema;


## Core Event emitter

The core event emitter is contained in the `Context` object. This is a simple [Node Emitter class](https://nodejs.org/api/events.html#class-eventemitter). By default, Core emitter implements the following events:

 - `graphql-error` - Called when a Graphql runtime error occurs.

Various middleware can add their own events, for example, middleware [Knex](https://github.com/via-profit-services/knex) adds such events as: `knex-error`; `knex-warning`; `knex-debug`.

To add your own events go to the [middlewares](./middlewares.md)

### Core Event emitter example

```js
const { graphQLExpress } = await core.factory({
  server,
  schema,
  middleware: [
    ({ context, requestCounter }) => {
      if (requestCounter === 1) {
        context.emitter.on("graphql-error", msg => console.error(msg));
      }

      return { context };
    },
    knexMiddleware
  ]
});
```

