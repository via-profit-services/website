import * as React from 'react';

export type State = {
  readonly isOpen: boolean;
  readonly maxHeight: React.CSSProperties['maxHeight'];
  readonly overflow: React.CSSProperties['overflow'];
};

export type ActionSetState = {
  readonly type: 'state';
  readonly payload: Partial<State>;
};

export type Action = ActionSetState;

const reducer: React.Reducer<State, Action> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'state': {
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};

export const defaultState: State = {
  isOpen: false,
  maxHeight: 'initial',
  overflow: 'hidden',
};

export default reducer;
