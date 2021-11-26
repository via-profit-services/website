# Permissions API

## Table of contents

 - [factory](#factory)
 - [or](#or)
 - [and](#and)
 - [chain](#chain)
 - [allow](#allow)
 - [deny](#deny)
 - [not](#not)


### factory

Function returns [Middleware](../core/middlewares.md).

Arguments:
 - An object containing:
  - `enableIntrospection` **(required)** **boolean|function**. Defines access to introspection. It can be boolean or a function that returns a boolean value. If `true`, access to introspection is possible. Otherwise, no. **Note**: You cannot use promise as the return value of a function.
  - `permissions` - **(required)** **Record<string, PermissionResolver>**. Permissions map - an object with keys that are the field names of your GraphQL schema. Each key is a string of the `<TypeName>.<fieldName>` type or `<TypeName>.*`, for example `'Query.users'` or `Book.*`. 



```js
const permissionsMiddleware = permissions.factory({
  enableIntrospection: false, // <-- introspection denied
  permissions: {
    'User.*': () => false, // < -- Access to User type fields is denied (see next rule)
    'User.name': () => true, // <-- Access to field name is allowed to all
  },
});
```


### and

Soon

### or

Soon

### and

Soon

### chain

Soon

### allow

Soon

### deny

Soon

### not

Soon
