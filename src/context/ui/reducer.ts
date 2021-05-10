import { UIStore, Action } from './context';

export const reducer = (state: UIStore, action: Action): UIStore => {
  switch (action.type) {
    case 'setUI': {
      const newState: UIStore = {
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
