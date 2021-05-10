declare module "*.json" {
  type JSONValue = JSON | string | number | null | boolean;
  type JSON = Record<string | number, JSON | JSONValue | JSONValue[] | JSON[]>;
  
  const value: JSON;
  export default value;
}