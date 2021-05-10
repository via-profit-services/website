import React, { useReducer } from 'react';

import { UIContext, UIStore, initialState as initState } from './context';
import reducer from './reducer';

interface WrapperProps {
  initialState?: Partial<UIStore>;
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, initialState } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...initState,
    ...initialState || {},
  });

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </UIContext.Provider>
  )
};

export default Wrapper;
