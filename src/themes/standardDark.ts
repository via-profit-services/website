import { DefaultTheme } from 'styled-components';

import standardLight from './standardLight';

const standardDark: DefaultTheme = {
  ...standardLight,
  color: {
    ...standardLight.color,
    text: {
      ...standardLight.color.text,
      primary: '#b1bed4',
      secondary: '#8a99b0',
    },
    primary: {
      ...standardLight.color.primary,
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
      ...standardLight.color.secondary,
      yellow: '#eaa124',
      green: '#398b46',
      red: '#aa2121',
    },
    background: {
      ...standardLight.color.background,
      default: '#23232f',
      card: '#1f232c',
    },
    hover: 'rgba(0, 0, 0, 0)',
  },
};

export default standardDark;
