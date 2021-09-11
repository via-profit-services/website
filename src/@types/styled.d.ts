import 'styled-components'


interface GridParams {
  visible: boolean;
  column: number;
  columns: number;
  gutter: number;
  safeFrame: number;
}

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
      desktop: GridParams;
      tablet: GridParams;
      mobile: GridParams;
    };
    color: {
      text: {
        primary: string;
        secondary: string;
      };
      primary: {
        darkBlue: string;
        blue: string;
        lightBlue: string;
        black: string;
        white: string;
        gray: string;
        lightGray: string;
        darkGray: string;
      };
      secondary: {
        yellow: string;
        green: string;
        red: string;
      };
      background: {
        default: string;
        card: string;
      };
      hover: string;
    };
  }
}