import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    fontSize: number;
    zIndex: {
      header: number;
      mobileMenu: number;
      modal: number;
    };
    grid: {
      desktop: {
        gutter: number;
        safeFrame: number;
      };
      touchable: {
        gutter: number;
      };
    };
    color: {
      gradients: [string, string, string, string];
      grey: Record<'100' | '200' | '300' | '400' | '500', string>;
      text: {
        primary: string;
        secondary: string;
        inverse: string;
      };
      black: {
        primary: string;
        secondary: string;
      };
      link: {
        primary: string;
        hover: string;
        visited: string;
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
    shadows: [string, string, string, string, string];
  }
}
