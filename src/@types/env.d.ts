declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_PORT: string;
    SERVER_HOSTNAME: string;

    ANALYZE: any;

    NODE_ENV: 'development' | 'production' | 'test';
  }
}
