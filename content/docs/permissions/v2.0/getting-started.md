# Permissions Getting Started

## Table of contents

- [Idea](#idea)
- [Installation](#installation)
- [Usage](#usage)
- [Recipes](#recipes)

## Idea

According to the GraphQL specification, the server should return exactly what was requested in the response ("Ask for what you need,
get exactly that."). But what to do when it is necessary to prohibit the receipt of certain fields, for example, a field with a user password?

Previously we used the tool [Graphql Shield](https://github.com/maticzav/graphql-shield) and we really liked it, but after a while we decided to write our own solution, so you will notice some similarities using this tool.

The protection principle is based on the rules that you define for one or more GraphQL fields. You can define a rule both for a specific field, for example, **login**, and for the entire type as a whole (**Account.\***) using the asterisk (`*`) symbol. Each rule is a function or promise that should return either a boolean value or a string with the error text. If the function returns `true`, then the graph traversal continues. If the function returns `false`, execution will immediately stop and GraphqlError will be thrown with an access error message. In the case when the returned value is a string, the same will be performed as if the function returned `false`, except that the returned string will be added to the error message text. By default, access to all fields is allowed. You can prohibit the receipt of any fields of a certain type using the asterisk symbol (`*`)

Just like in graphql-shield, our module has helper functions that allow you to link rules into logical chains, for example, the `or` rule takes an array with other rules as arguments. If at least one rule returns a value other than `true`, the graph execution will be terminated. In addition to the assistant `or`, there are such assistants as `and`, `chain`, `allow`, `deny`, and `not`.

In addition to the rules, it is possible to block access to introspection. To do this, it is enough to specify only one parameter when initializing the module.

## Installation

It is assumed that you have the [@via-profit-services/core](../core.md) module installed and configured.

```bash
$ yarn add @via-profit-services/permissions
```

## Usage

In the example below, introspection is allowed only in development mode. It is also assumed that there is a roles key in the Сontext object containing a list of roles of the current user. In this project, you should either use the module [authentification](../authentification.md) or use your own solution. 

The **isAuthorized** rule applied to **Query.\*** allows access to all direct children of the Query field only if the user is authorized.

The **isDeveloper** and **isAdmin** rules composed by the logical expression **or** will allow access to the **password** field of the **User** type only if the user has either the administrator or developer role.

_index.js_

```js
const core = require("@via-profit-services/core");
const permissions = require("@via-profit-services/permissions");

const isAuthorized = ({ context }) => context.roles.includes("authorized");
const isDeveloper = ({ context }) => context.roles.includes("developer");
const isAdmin = ({ context }) => context.roles.includes("admin");

const permissionsMiddleware = permissions.factory({
  enableIntrospection: process.env.NODE_ENV === 'development',
  permissions: {
    "Query.*": isAuthorized, // <-- protect all fields of Query
    "Mutation.*": isAuthorized, // <-- protect all fields of Mutation
    "User.login": permissions.or([isDeveloper, isAdmin]),
    "User.password": isDeveloper,
  }
});

const { graphQLExpress } = await core.factory({
  server,
  schema,
  middleware: [
    permissionsMiddleware
  ]
});
```

[![Edit @via-profit-services-permissions-node-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-core-node-basic-forked-tk8uv?fontsize=14&hidenavigation=1&theme=dark)


## Recipes

<details>
  <summary>Deny all fields except certain ones</summary>

### Deny all fields except certain ones

In cases where you need to deny access to all fields of the type, except for some.

```js
const permissionsMiddleware = permissions.factory({
  enableIntrospection: true,
  permissions: {
    'User.*': () => false, // <-- Deny to all User field...
    'User.email': () => true, // <-- but allow to email field...
    'User.name': () => true, // <-- and allow to name field
  },
});
```
</details>

<details>
  <summary>By default, access is only for registered users</summary>

### Access is only for registered users

```js
const permissionsMiddleware = permissions.factory({
  enableIntrospection: false,
  permissions: {
    'Query.*': ({ context }) => checkIsAuthUser(), // <-- Need to be a first
    'Mutation.*': ({ context }) => checkIsAuthUser(), // <-- Need to be a first
    ... // <-- Your other rules
  },
});
```
</details>

