declare namespace NodeJS {
  interface ProcessEnv {
    WEBPACK_DEV_SERVER_PORT: string;

    SERVER_PORT: string;
    SERVER_HOSTNAME: string;

    GRAPHQL_ENDPOINT: string;
    GRAPHQL_SUBSCRIPTIONS: string;

    ANALYZE: any;

    NODE_ENV: 'development' | 'production' | 'test';
  }
}
