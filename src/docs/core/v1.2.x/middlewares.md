# Middleware

Middleware is a special function that allows you to expand the GraphQL **Context** by adding new parameters into it, as well as performing GraphQL validation at the [ValidationRule](https://graphql.org/graphql-js/validation/). In addition, you can modify the current GraphQL scheme.

Middleware factory function will be called on **every GraphQL request**. Keep it in mind. When calling function, it would passed a set of parameters which contains a current context value, current schema, http request and so on. The function could return nothing or return the modified value of one of the parameters.

_Note: Middlewares order. Since each middleware mutates the context and returns it back. The presence of a property parameter in the context will depend on each of these middleware._

Will be passed:

- **config** - Parameters that were passed during core factory called.
- **context** - The current context value returned from the previous middleware, or the default context value if no middleware has been executed before.
- **schema** - The current GraphQL schema returned from the previous middleware, or the initial schema if no middleware has been executed before.
- **extensions** - The current Extensions object returned from the previous middleware, or the initial extensions if no middleware has been executed before.
- **request** - HTTP request (`Express.Request`)

Possible return:

- **context** - You should mutated this context value. **Not override and not merge with spread operator**.
- **schema** - You should mutated this schema value. **Not override and not merge with spread operator**.
- **extensions** - You should mutated this schema value. **Not override and not merge with spread operator**.
- **validationRule** - You can return GraphQL validation rule or array of validation rules. All rules that will be returned from middlewares will be concatenated and passed to GraphQL `execute` method

_Note: Use wrapper function to make closure and cache._

To create your simple middleware you can see this example:

```ts
import { factory, Middleware } from '@via-profit-services/core';

// function wrapper
const customMiddlewareFactory = () => {

  // Middleware factory which should passed to middleware props
  const middleware: Middleware = ({ context }) => {

    // Inject custom propertied into context
    context.myCustomContextProp = context.myCustomContextProp {
      foo: 'The Foo',
    }

    // Do not forget return it
    return {
      context,
    };
  };

  return middleware;
}

const { graphQLExpress } = await factory({
  server,
  schema,
  middleware: [
    customMiddlewareFactory(),
  ],
});
```

**Warning! Do not use spread operator while combining old current context and new context value. See example below:**

_Warning! This code is not valid_

```ts
// !!! This code is not valid
const middleware: Middleware = ({ context }) => ({
  ...context,
  myCustomContextProp: {
    foo: 'bar',
  }
}));
```

For TypeScript you can expand the types using the Declaration files `*.d.ts`.
Now you can use TypeScript autocompletion in the IDE, which will contain the current Core types with your custom types.

```ts
declare module '@via-profit-services/core' {
  import DataLoader from 'dataloader';

  // extend standard Context object
  interface Context {
    myCustomContextProp: {
      foo: string;
    };
  }

  // extend standard services collection
  interface ServicesCollection {
    myService: MyServiceClass;
  }

  // extend dataloader collection
  interface DataLoaderCollection {
    myLoader: DataLoader<string, MyNodeType>;
  }
}
```
