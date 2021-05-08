import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  fontSize: 16,
  zIndex: {
    appBar: 10,
    mobileMenu: 9,
    modal: 11,
    terms: 20,
  },
  grid: {
    desktop: {
      visible: false,
      column: 88,
      columns: 12,
      gutter: 24,
      maxWidth: 1320,
      safeFrame: 1096,
    },
    tablet: {
      visible: false,
      column: 88,
      columns: 6,
      gutter: 24,
      maxWidth: 648,
      safeFrame: 648,
    },
    mobile: {
      visible: false,
      column: 88,
      columns: 3,
      gutter: 24,
      maxWidth: 320,
      safeFrame: 280,
    },
  },
  color: {
    text: {
      primary: '#000',
      secondary: '#c4c4c4',
    },
    primary: {
      darkBlue: '#002999',
      blue: '#0F62FE',
      lightBlue: '#18a0fb',
      black: '#000',
      white: '#fff',
      gray: '#c4c4c4',
      lightGray: '#eff0f1',
      darkGray: '#5e5e5e',
    },
    secondary: {
      yellow: '#eaa124',
      green: '#398b46',
      red: '#aa2121',
    },
    hover: 'rgba(0, 0, 0, 0)',
  },
};

export default light;
