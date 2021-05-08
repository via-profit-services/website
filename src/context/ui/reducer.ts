import { Store, Action } from './types';

export const reducer = (state: Store, action: Action): Store => {
  switch (action.type) {
    case 'setUI': {
      const newState: Store = {
        ...state,
        ...action.payload,
      };

      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
