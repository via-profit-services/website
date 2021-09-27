export {};

declare global {
  export type ServerToClientTransfer = {
    REDUX: Record<string, any>;
  };
}
