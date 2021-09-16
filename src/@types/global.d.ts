export {};

declare global {
  export type ServerToClientTransfer = {
    REDUX: Record<string, any>;
    ENVIRONMENT: {
      GRAPHQL_ENDPOINT: string;
      SUBSCRIPTION_ENDPOINT: string;
    };
  };
}
