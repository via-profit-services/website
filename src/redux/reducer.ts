import { Reducer } from 'redux';
import Cookies from 'js-cookie';

import { COOKIE_RECORD_THEME, COOKIE_RECORD_MODE } from '~/utils/constants';

const createReducer = (initialState: ReduxState) => {
  const reducer: Reducer<ReduxState, ReduxActions> = (
    state = initialState,
    action,
  ) => {
    switch (action.type) {
      case 'theme': {
        const newState: ReduxState = {
          ...state,
          theme: action.payload,
        };
        Cookies.set(COOKIE_RECORD_THEME, newState.theme);

        return newState;
      }

      case 'mode': {
        const newState: ReduxState = {
          ...state,
          mode: action.payload,
        };
        Cookies.set(COOKIE_RECORD_MODE, newState.mode);

        return newState;
      }
      default:
        return state;
    }
  };

  return reducer;
};

export default createReducer;
