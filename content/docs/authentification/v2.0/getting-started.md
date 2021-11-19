# Authentification Getting started

## Table of contents

- [Idea](#idea)
- [What function does the middleware perform?](#what-function-does-the-middleware-perform)
- [Installation](#installation)
- [Basic usage](#basic-usage)

## Idea

При аутентификации пользователь вводит свой логин и пароль. Пользовательский агент вызывает мутацию `Mutation.authentification.create` передавая введенные данные. Миддлеваре содержит соответствующий резолвер для этой мутации, который передает управление пользовательскому коду вызывая функцию `createTokenFn`. В этой функции вы должны разместить проверку введенных данных. Если данные введены верно, то следует сгенерировать пару токенов вызвав соответствующий метод (см. пример ниже). Первый токен, который будет сгенерирован - это так называемый **Access** токен, а второй - **Refresh** токен. В случае неверно введенных данных вам следует сообщить об ошибке как показано в примере ниже.

Пользовательский агент должен сохранить где-либо эти токены и при всех последующих запросах должен передавать Access токен в заголовке **Authorization** (`Authorization: Bearer <access_token>`). Каждый токен содержит время жизни, после которого он будет считаться недействительным. Access токен принято выдавать на короткий промежуток времени, например, 5 минут. А Refresh токен - наоборот, следует выдавать с достаточно длительным сроком действия. Когда Access токен истекает, пользовательский агент может получить новый Access токен. Для этого он предоставляет свой Refresh токен и если он действителен, то сервер должен сгенерировать новую пару токенов, а старые токены должны быть анулированы. Эта процедура называется обмен токенов.

Для реализации вышеописанной идеи мы используем [JWT](https://jwt.io/). 

## What function does the middleware perform?

 - [x] Расширяет объект Context добавляя в него ключ `jwt`, который содержит конфигурацию токенов.
 - [x] Расширяет объект Context добавляя в него экземпляр класса `authentification`, который содержит необходимые методы для создания и проверки токенов
 - [x] Парсит заголовок запроса и извлекает из него токен. Валидирует извлеченный токен и расширяет объект Context добавляя в него ключ `token`, который содержит полезную нагрузку переданного токена

## Installation

It is assumed that you have the [@via-profit-services/core](../core.md) module installed and configured.


You need to install the peer dependencies to:

```bash
$ yarn add @via-profit-services/core
$ yarn add jsonwebtoken uuid
$ yarn add @via-profit-services/authentification
```

## Basic usage

For [JWT](https://github.com/auth0/node-jsonwebtoken) to work, it is necessary to generate SSH keys using an algorithm, for example, `RS256`.

_**Note:** When requesting passphrase, just press Enter to leave this parameter empty. The same must be done when confirming passphrase._

At the root of the project (at the same level as package.json) create a keys directory and create keys in it by executing the commands:

```bash
$ mkdir ./keys
$ cd ./keys
$ ssh-keygen -t rsa -b 4096 -mem -f jwtRS256.key
$ openssl rsa -in jwtRS256.key -pub out -outform PEM -out jwtRS256.key.pub
```

After executing the commands, a private key (jwtrs256.key) and a public key (jwtrs256.key.pub) will be created.

Using the `factory` method, initialize middleware and then connect it. After connecting this middleware, the **Context** object will contain property `token`, which will be a token package. In addition to the moddleware, you need to add resolvers and types of this module.

**Note!**: This middleware should be connected as early as possible, as the order of connection is of great importance.

_index.js_

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
