
declare module '*.mp4' {
  const content: string | any;
  export default content;
}

declare module '*.webm' {
  const content: string | any;
  export default content;
}

declare module '*.svg' {
  const content: string | any;
  export default content;
}

declare module '*.jpeg' {
  const content: string | any;
  export default content;
}

declare module '*.jpg' {
  const content: string | any;
  export default content;
}

declare module '*.png' {
  const content: string | any;
  export default content;
}

declare module '*!raw' {
  const content: string | any;
  export default content;
}

declare module '*.woff' {
  const content: string | any;
  export default content;
}

declare module "*.md" {
  const markdown: string;
  export default markdown;
}

declare module "*.json" {
  type JSONValue = JSON | string | number | null | boolean;
  type JSON = Record<string | number, JSON | JSONValue | JSONValue[] | JSON[]>;
  
  const value: JSON;
  export default value;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}