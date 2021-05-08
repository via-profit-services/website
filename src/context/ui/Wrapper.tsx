import React, { useReducer } from 'react';

import { Context, initialState as initState } from './context';
import reducer from './reducer';
import { Store } from './types';

interface WrapperProps {
  initialState?: Partial<Store>;
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, initialState } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...initState,
    ...initialState || {},
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <>{children}</>
    </Context.Provider>
  )
};

export default Wrapper;
