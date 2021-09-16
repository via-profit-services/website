import { DefaultTheme } from 'styled-components';

import light from './light';

const dark: DefaultTheme = {
  ...light,
  color: {
    ...light.color,
  },
};

export default dark;
