import { createContext } from 'react';

import { Store, UIContext } from './types';
import { DEFAULT_THEME, DEFAULT_LOCALE, DEFAULT_FONT_SIZE } from '~/utils/constants';

export { Store }

export const initialState: Store = {
  theme: DEFAULT_THEME,
  locale: DEFAULT_LOCALE,
  fontSize: DEFAULT_FONT_SIZE,
  drawer: true,
};

export const Context = createContext<UIContext>({
  state: initialState,
  dispatch: () => null,
});
