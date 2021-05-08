import { SUPPORTED_LOCALES } from '~/utils/constants';

export interface Store {
  theme: 'common';
  locale: 'ru' | 'en';
  fontSize: 'standard';
  drawer: boolean;
}

export type ActionSetUI = {
  type: 'setUI';
  payload: Partial<Store>;
}

export type Action = ActionSetUI;

export interface UIContext {
  state: Store;
  dispatch: React.Dispatch<Action>;
}
