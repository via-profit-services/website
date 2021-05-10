import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: number;
    zIndex: {
      appBar: number;
      mobileMenu: number;
      modal: number;
      terms: number;
    };
    grid: {
      visible: boolean;
      column: number;
      columns: number;
      gutter: number;
      safeFrame: number;
    };
    color: {
      text: {
        primary: string;
        secondary: string;
      };
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        main: string;
        dark: string;
      };
      appBar: {
        background: string;
        color: string;
      };
      link: {
        primary: string;
        visited: string;
      };
      hover: string;
    };
  }
}