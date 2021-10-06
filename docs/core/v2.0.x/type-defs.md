# GraphQL Core types

## Scalars

 - **Money** - The value is stored in the smallest monetary unit (kopecks, cents, etc.). Real type - Int. E.g. For 250 USD this record returns value as 250000 (250$ * 100¢)
 - **DateTime** - Use JavaScript Date object for date/time fields.
 - **Date** - Use JavaScript Date object for date fields.
 - **Time** - And Time type.
 - **URL** - A field which value conforms to the standard URL format as specified in [RFC3986](https://www.ietf.org/rfc/rfc3986.txt).
 - **EmailAddress** - A field which value conforms to the standard internet email address format as specified in [RFC822](https://www.w3.org/Protocols/rfc822/).
 - **JSON** - The JSON scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 - **JSONObject** - The JSONObject scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 - **Void** - Represents NULL values

## Types and interfaces

 - *interface* **Node** - entity with required field: `id`. Used in Edges
 - *type* **OrderDirection** - Enum type to make the order (ASC, DESC)
 - *type* **Error** - entity fo display errors
 - *type* **PageInfo** - See [Connection spec.](https://relay.dev/graphql/connections.htm)
 - *interface* **Edge** - See [Connection spec.](https://relay.dev/graphql/connections.htm)
 - *interface* **Connection** - See [Connection spec.](https://relay.dev/graphql/connections.htm)
 - *input* **BetweenDate** - Between `Date` query type
 - *input* **BetweenTime** - Between `Time` query type
 - *input* **BetweenDateTime** - Between `DateTime` query type
 - *input* **BetweenInt** - Between `Int` query type
 - *input* **BetweenMoney** - Between `Money` query type
