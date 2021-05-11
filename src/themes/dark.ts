import { DefaultTheme } from 'styled-components';

const dark: DefaultTheme = {
  fontSize: 16,
  zIndex: {
    appBar: 10,
    mobileMenu: 9,
    modal: 11,
    terms: 20,
  },
  grid: {
    gutter: 24,
    safeFrame: 1760,
  },
  color: {
    text: {
      primary: '#c4c4d8',
      secondary: '#717275',
    },
    primary: {
      main: '#b349c1',
      light: '#d48ade',
      dark: '#34003b',
    },
    secondary: {
      main: '#e53935',
      light: '#e53935',
      dark: '#e53935',
    },
    background: {
      main: '#262739',
      dark: '#101020',
    },
    appBar: {
      background: 'rgba(16, 11, 18, 0.9)',
      color: '#fff',
    },
    link: {
      primary: '#b349c1',
      visited: '#d48ade',
    },
    hover: 'rgba(0, 0, 0, 0)',
  },
};

export default dark;
