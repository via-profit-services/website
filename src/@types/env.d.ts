declare namespace NodeJS {
  interface ProcessEnv {

    NODE_ENV: 'development' | 'production' | 'test';
    ANALYZE: any;

    WEBPACK_DEV_SERVER_PORT: string;
    SERVER_PORT: string;
    SERVER_HOSTNAME: string;
    CORS_ORIGIN_LIST: string;
  }
}