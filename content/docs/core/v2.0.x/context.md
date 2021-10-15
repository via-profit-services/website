# Context

`Context` - A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database ([graphql.org][https://graphql.org/learn/execution/#root-fields-resolvers]).

According to the graphql spec, each resolver receives the following set of arguments:

 - parent (first argument) - Object that was returned in the previous resolver.
 - args (second argument) - The arguments provided to the field in the GraphQL query.
 - **context** (third argument) - A value which is provided to every resolver and holds important contextual information.
 - info (fourth argument) - A value which holds field-specific information relevant to the current query as well as the schema details. See [type GraphQLResolveInfo](https://graphql.org/graphql-js/type/#graphqlobjecttype) for more details.


The baseline state of the context contains:

 - `timezone` - timezone string
 - `services` - ServicesCollection;
 - `emitter` - CoreEmitter;
 - `request` - Request;
 - `schema` - GraphQLSchema;
