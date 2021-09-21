import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  fontSize: 16,
  zIndex: {
    header: 8,
    mobileMenu: 9,
    modal: 10,
  },
  grid: {
    desktop: {
      gutter: 12,
      safeFrame: 1200,
    },
    touchable: {
      gutter: 5,
      safeFrame: 280,
    },
  },
  color: {
    gradients: [
      'linear-gradient(90.02deg, #900071 0.77%, #44007B 99.98%)',
      'linear-gradient(89.92deg, rgba(192, 0, 138, 0.8) 0.1%, rgba(109, 0, 147, 0.8) 39.1%, rgba(52, 0, 119, 0.8) 99.95%)',
      'linear-gradient(134.44deg, #E900A8 27.42%, rgba(192, 0, 138, 0.46) 83.05%)',
      'linear-gradient(155.63deg, #FFFFFF 10.39%, #F2F2F2 88.8%)',
    ],
    text: {
      primary: '#212121',
      secondary: '#8b8b8b',
      inverse: '#FFFFFF',
    },
    grey: {
      100: '#FAFAFA',
      200: '#F0F0F0',
      300: '#E5E5E5',
      400: '#CCCCCC',
      500: '#B7B7B7',
    },
    black: {
      primary: '#000000',
      secondary: '#363636',
    },
    accent: {
      primary: '#6D0093',
      secondary: '#C0008A',
    },
    background: {
      primary: '#FBFBFB',
      secondary: '#FFFFFF',
    },
  },
  shadows: [
    '0px 4px 13px -4px rgba(0, 0, 0, 0.23)',
    '0px 11px 19px -6px rgba(0, 0, 0, 0.3)',
    '0px 32px 50px -17px rgba(74, 0, 100, 0.14)',
    '0px 11px 19px -6px rgba(143, 38, 225, 0.65)',
    '0px 6px 20px 0px rgb(74, 0, 100, 0.44)',
  ],
};

export default light;
