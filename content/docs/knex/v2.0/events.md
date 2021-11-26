# Knex events

The Knex module adds events to the Core EventEmitter that you can subscribe to.

## Table of contents

- [How to subscribe](#how-to-subscribe)
- [knex-debug](#knex-debug)
- [knex-warning](#knex-warning)
- [knex-error](#knex-error)

### How to subscribe

In order to subscribe, you need to write your own middleware for the Core module (See [middlewares](../core/middlewares.md) for more details).

_Please note that you should subscribe to events as early as possible. It is best to do this before connecting middleware knex._

```js
const { graphQLExpress } = await core.factory({
  server,
  schema,
  middleware: [
    // subscribe to events
    ({ context, requestCounter }) => {
      const { emitter } = context;
      if (requestCounter === 1) {
        emitter.on("knex-error", (msg, err) => console.error("[Knex error]", msg, err));
        emitter.on("knex-warning", (msg) => console.warn("[Knex warn]", msg));
        emitter.on("knex-debug", (msg) => console.info("[Knex debug]", msg));
      }

      return { context };
    },
    // connect knex middleware
    knexMiddleware,
  ],
});
```

[![Edit @via-profit-services-knex-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-knex-basic-i8ebn?fontsize=14&hidenavigation=1&theme=dark)

### knex-debug

Debugging messages, errors, and all requests. Еhe callback will be called with one argument - the message text.

```js
emitter.on("knex-debug", (msg) => console.info("[Knex debug]", msg));
```

### knex-warning

Warning and deprecations messages. the callback will be called with one argument - the message text.

```js
emitter.on("knex-warning", (msg) => console.warn("[Knex warning]", msg));
```

### knex-error

Error messages. the callback will be called with two arguments - message text and error.

```js
emitter.on("knex-error", (msg, err) => console.error("[Knex error]", msg, err));
```
