import { Dispatch } from 'redux';

export {};

declare global {
  export type ThemeVariants = 'light' | 'dark';
  export type ModeVariants = 'touchable' | 'desktop';

  export type ReduxState = {
    theme: ThemeVariants;
    mode: ModeVariants;
  };

  export type ReduxSetThemeAction = {
    readonly type: 'theme';
    readonly payload: ThemeVariants;
  };

  export type ReduxSetActiveSectionAction = {
    readonly type: 'activeSection';
    readonly payload: string;
  };

  export type ReduxSetModeAction = {
    readonly type: 'mode';
    readonly payload: ModeVariants;
  };

  export type ReduxActions =
    | ReduxSetThemeAction
    | ReduxSetModeAction
    | ReduxSetActiveSectionAction;

  export type ReduxSelectedActiveSection = ReduxState['activeSection'];
  export type ReduxSelectedTheme = ReduxState['theme'];
  export type ReduxSelectedMode = ReduxState['mode'];
  export type ReduxSelectedUI = Pick<ReduxState, 'theme'>;

  export type ReduxDispatch = Dispatch<ReduxActions>;
}
