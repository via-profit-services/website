import { createContext } from 'react';

import { DEFAULT_THEME, DEFAULT_LOCALE, DEFAULT_FONT_SIZE } from '~/utils/constants';

export interface UIContextInterface {
  state: UIStore;
  dispatch: React.Dispatch<Action>;
}

export type ActionSetUI = {
  type: 'setUI';
  payload: Partial<UIStore>;
}

export type Action = ActionSetUI;

export interface UIStore {
  theme: 'light' | 'dark';
  locale: 'ru' | 'en';
  fontSize: 'standard';
  drawer: boolean;
}

export const initialState: UIStore = {
  theme: DEFAULT_THEME,
  locale: DEFAULT_LOCALE,
  fontSize: DEFAULT_FONT_SIZE,
  drawer: true,
};

export const UIContext = createContext<UIContextInterface>({
  state: initialState,
  dispatch: () => null,
});
