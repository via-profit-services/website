import 'styled-components';

interface GridParams {
  gutter: number;
  safeFrame: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: number;
    zIndex: {
      header: number;
      mobileMenu: number;
      modal: number;
    };
    grid: {
      desktop: GridParams;
      touchable: GridParams;
    };
    color: {
      gradients: [string, string, string, string];
      grey: Record<'100' | '200' | '300' | '400', string>;
      text: {
        primary: string;
        secondary: string;
        inverse: string;
      };
      black: {
        primary: string;
        secondary: string;
      };
      accent: {
        primary: string;
        secondary: string;
      };
      background: {
        primary: string;
        secondary: string;
      };
    };
    shadows: [string, string, string, string];
  }
}
