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
    gutter: 24,
    safeFrame: 1760,
  },
  color: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    primary: {
      main: '#7200b4',
      light: '#9980f0',
      dark: '#540085',
    },
    secondary: {
      main: '#e87900',
      light: '#fd8c11',
      dark: '#b96000',
    },
    background: {
      main: '#f1f1f1',
      dark: '#c8c8c8',
    },
    appBar: {
      background: '#7200b4',
      color: '#fff',
    },
    link: {
      primary: '#6552a6',
      visited: '#9980f0',
    },
    hover: 'rgba(0, 0, 0, 0)',
  },
};

export default light;
