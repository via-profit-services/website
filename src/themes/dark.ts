import { DefaultTheme } from 'styled-components';

import light from './light';

const dark: DefaultTheme = {
  ...light,
  color: {
    ...light.color,
    accent: {
      ...light.color.accent,
      primary: '#70409b',
      secondary: '#b730b6',
    },
    gradients: [
      'linear-gradient(90.02deg, #900071 0.77%, #44007B 99.98%)',
      'linear-gradient(89.92deg,rgb(146 0 105 / 80%) 0.1%,rgb(46 1 62 / 79%) 39.1%,rgb(26 0 60 / 86%) 99.95%)',
      'linear-gradient(134.44deg, #E900A8 27.42%, rgba(192, 0, 138, 0.46) 83.05%)',
      'linear-gradient(155.63deg, #40266d 10.39%,#0c090f 88.8%)',
    ],
    background: {
      ...light.color.background,
      primary: '#1e1e2e',
      secondary: '#262739',
    },
    black: {
      primary: '#171825',
      secondary: '#292929',
    },
    text: {
      ...light.color.text,
      primary: '#cac4d3',
      secondary: '#918c9e',
      inverse: '#e7e0ff',
    },
    grey: {
      ...light.color.grey,
      100: '#a4a4a5',
      200: 'rgb(72 72 72 / 32%)',
      300: '#5d5d73',
      400: '#3a3a65',
      500: '#272730',
    },
  },
};

export default dark;
