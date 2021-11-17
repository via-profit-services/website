# Getting Started


## Table of contents

- [Installation](#installation)
- [Basic usage](#basic-usage)


## Installation

It is assumed that you have the [@via-profit-services/core](../core.md) module installed and configured.

First of all you should install some peer dependencies and install the core:

 - [Core](../core.md) - Core module (_It is assumed that the module is already installed and configured_)
 - [graphql-subscriptions](https://github.com/apollographql/graphql-subscriptions) - GraphQL subscriptions
 - [graphql-redis-subscriptions](https://github.com/davidyaha/graphql-redis-subscriptions) - This package implements the PubSubEngine Interface from the graphql-subscriptions package and also the new AsyncIterator interface
 - [graphql-ws](https://github.com/enisdenjo/graphql-ws) - GraphQL websocket transport
 - [ioredis](https://github.com/luin/ioredis) - Redis client
 - [ws](https://github.com/websockets/ws) - WebSocket library

 

```bash
$ yarn add graphql-redis-subscriptions graphql-subscriptions ioredis graphql-ws ws
$ yarn add @via-profit-services/subscriptions
```

## Basic usage


[![Edit @via-profit-services-subscriptions-node-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-profit-services-subscriptions-node-basic-v5b45?fontsize=14&hidenavigation=1&theme=dark)