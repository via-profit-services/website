# Authentification Api


## Table of contents

 - [factory](#factory)
 - [Context.authentification.generateTokens](#contextauthentificationgeneratetokens)

### factory

The **factory** method is available for import from the module:

```js
const { factory } = require("@via-profit-services/authentification");
```

Function returns [Core middleware](../core/middlewares.md).

Arguments:
 - An object containing:
  - `privateKey` **required** **String** or **Buffer** -  Cert private key file path or key content.
  - `publicKey` **required** **String** or **Buffer** -  Cert public key file path or key content.
  - `createTokenFn` **required** **Function** - This function is triggered every time an authorization attempt is made. You should return success or error response. The function will be called with arguments:
    - An object containing:
      - `login` - **required** **String** - Username
      - `password` - **required** **String** - Password
      - `context` - **required** **String** - GraphQL [Context](../core/context.md) object
  - `refreshTokenFn` **required** **Function** - This function is triggered every time a token refresh is attempted. You should return success or error response. The function will be called with arguments:
    - An object containing:
      - `tokenPayload` - **Object** - An object containing:
        - **type** - Refresh token type. Will be `refresh` for refresh token.
        - **id** - Refresh token ID
        - **uuid** - Account ID
        - **roles** - List of account roles
        - **exp** - Unix time that determines the moment when the Token becomes invalid
        - **iss** - A case-sensitive string or URI that is the unique identifier of the token-generating party
      - `context` - **required** **String** - GraphQL [Context](../core/context.md) object
  - `checkTokenRevokeFn` **required** **Function** - This function is run at every request to check if the token is in the blacklist. The function will be called with arguments:
    - An object containing:
      - `tokenPayload` - **Object** - An object containing:
        - **type** - Token type. Will be `refresh` for refresh token and `access` for access token.
        - **id** - Token ID
        - **uuid** - Account ID
        - **roles** - List of account roles
        - **exp** - Unix time that determines the moment when the Token becomes invalid
        - **iss** - A case-sensitive string or URI that is the unique identifier of the token-generating party
      - `context` - **required** **String** - GraphQL [Context](../core/context.md) object
  - `roles` **required** **String[]** - Array of account roles. The roles that will be passed here will be added to the type: `enum AccountRole`.
  - `algorithm` Signature algorithm. Could be one of these values: HS256 or HS384 or HS512 or RS256 or RS384 or RS512 or ES256 or ES384 or ES512 or none. Default: `RS256`
  - `issuer` **String** - A case-sensitive string or URI that is the unique identifier of the token-generating party. Default: `via-profit-service`
  - `accessTokenExpiresIn` **Number** - Unix time that determines the moment when the Access Token becomes invalid (the access token lifetime in seconds).  Default: `1800` (30 minutes)
  - `refreshTokenExpiresIn` **Number** - Unix time that determines the moment when the Refresh Token becomes invalid (the refresh token lifetime in seconds).  Default: `2.592e6` (30 days)


Returns:
  Core middleware

_Example of usage:_

```js
const { makeExecutableSchema } = require("@graphql-tools/schema");
const core = require("@via-profit-services/core");
const authentification = require("@via-profit-services/authentification");
const express = require("express");
const path = require("path");
const { createServer } = require("http");

const schema = require("./schema");

(async () => {
  const port = 8085;
  const app = express();
  const server = createServer(app);

  const auth = authentification.factory({
    privateKey: path.resolve(__dirname, './keys/jwtRS256.key'), // <-- path to your private key
    publicKey: path.resolve(__dirname, './keys/jwtRS256.key.pub'), // <-- path to your public key
    accessTokenExpiresIn: 1800, // < -- The access token lifetime in seconds)
    roles: ['viewer', 'enemy', 'administrator'], // < -- The roles that will be passed here will be added to the type: enum AccountRole
    checkTokenRevokeFn: () => {...} // < -- This function is run at every request to check if the token is in the blacklist
    createTokenFn: () => {...} // < -- This function is triggered every time an authorization attempt is made
    refreshTokenFn: () => {...} // < -- This function is triggered every time a token refresh is attempted
  });

  const { graphQLExpress } = await core.factory({
    server,
    schema: makeExecutableSchema({
      resolvers: [
        core.resolvers,
        auth.resolvers,
      ],
      typeDefs: [
        core.typeDefs,
        auth.typeDefs,
      ],
    }),
    middleware: [
      auth.middleware,
    ]
  });

  app.use("/graphql", graphQLExpress);

  server.listen(port, () => {
    console.info(`GraphQL server started at port ${port}`);
  });
})();
```
[![Edit @via-profit-services-authentification-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-authentification-basic-5stt6?fontsize=14&hidenavigation=1&theme=dark)


### Context.authentification.generateTokens

The **generateTokens** method is a member of the authentication class, which is available in the Graphql Context. Accordingly, access to this method is possible only from resolvers or by calling the [createTokenFn](#factory) function

```js
...
createTokenFn: async ({ context, login, password }) => {
  const { services } = context;
  const credentials = `${login}.${password}`;

  // get account by login
  const account = accounts.find((account) => account.login === login);

  // return error if account not found or password are invalid
  if (!account || !bcryptjs.compareSync(credentials, account.password)) {
    return {
      __typename: "TokenRegistrationError",
      name: "InvalidCredentials",
      msg: "Invalid login or password"
    };
  }

  const payload = services.authentification.generateTokens({
    uuid: account.id,
    roles: account.roles
  });

  // save token in your store
  tokensList.push(payload.accessToken);

  return {
    __typename: "TokenRegistrationSuccess",
    query: {},
    payload
  };
}
...
```