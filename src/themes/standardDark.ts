import { DefaultTheme } from 'styled-components';

import standardLight from './standardLight';

const standardDark: DefaultTheme = {
  ...standardLight,
  color: {
    ...standardLight.color,
  },
};

export default standardDark;
