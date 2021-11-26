# Redis events

The Redis module adds events to the Core EventEmitter that you can subscribe to.

## Table of contents

- [How to subscribe](#how-to-subscribe)
- [redis-error](#redis-error)
- [redis-connect](#redis-connect)
- [redis-reconnecting](#redis-reconnecting)
- [redis-close](#redis-close)


### How to subscribe

In order to subscribe, you need to write your own middleware for the Core module (See [middlewares](../core/middlewares.md) for more details).

_Please note that you should subscribe to events as early as possible. It is best to do this before connecting middleware redis._

```js
const { graphQLExpress } = await core.factory({
  server,
  schema,
  middleware: [
    // subscribe to events
    ({ context, requestCounter }) => {
      const { emitter } = context;
      if (requestCounter === 1) {
        emitter.on("redis-error", (msg, err) => console.error("[Redis error]", msg, err));
        emitter.on("redis-connect", () => console.warn("[Redis connect]"));
        emitter.on("redis-reconnecting", () => console.info("[Redis reconnecting]"));
        emitter.on("redis-close", () => console.info("[Redis close]"));
      }

      return { context };
    },
    // connect redis middleware
    redisMiddleware,
  ],
});
```

### redis-error

Error messages.

```js
emitter.on("redis-error", (err) => console.error("[Redis error]", err));
```

### redis-connect

This event will be emitted when creating a new Redis instance.

```js
emitter.on("redis-connect", () => console.error("[Redis connect]"));
```

### redis-reconnecting

This event will be emitted when reconnecting

```js
emitter.on("redis-reconnecting", () => console.error("[Redis reconnecting]"));
```

### redis-close

This event will be emitted when the connection with redis is terminated.

```js
emitter.on("redis-close", () => console.error("[Redis close]"));
```
