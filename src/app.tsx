import * as React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import loadable, { loadableReady } from '@loadable/component';
import { Provider as ReduxProvider, useSelector } from 'react-redux';

import createReduxStore from '~/redux/store';
import reduxDefaultState from '~/redux/defaultState';

const ApplicationDesktop = loadable(() => import('~/render/desktop'));
const ApplicationTouchable = loadable(() => import('~/render/touchable'));

const ModeSwitcher: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);

  return (
    <>
      {mode === 'desktop' && <ApplicationDesktop />}
      {mode === 'touchable' && <ApplicationTouchable />}
    </>
  );
};

const bootstrap = async () => {
  let reduxState = { ...reduxDefaultState };

  // parse preloaded states from base64 string
  if (typeof window !== 'undefined' && (window as any)?.__PRELOADED_STATES__) {
    const statesStr = (window as any).__PRELOADED_STATES__ || '';
    delete (window as any).__PRELOADED_STATES__;
    try {
      const decodedStatesStr = window.atob(statesStr.replace(/</g, '\\u003c'));
      const preloadedStates = JSON.parse(
        decodedStatesStr,
      ) as Partial<ServerToClientTransfer>;

      reduxState = {
        ...reduxState,
        ...preloadedStates.REDUX,
      };
    } catch (err) {
      console.error('Failed to parse environment data', err);
    }
  }

  // merge local storage data
  if (typeof window !== 'undefined') {
    try {
      const localDefaultState = JSON.parse(
        localStorage.getItem('@ReduxState') || '',
      );
      reduxState = {
        ...reduxState,
        ...localDefaultState,
      };
    } catch (err) {
      // do nothing
    }
  }

  const reduxStore = createReduxStore(reduxState);

  const render = () => {
    (ReactDom as any).hydrateRoot(
      document.getElementById('app'),
      <BrowserRouter>
        <ReduxProvider store={reduxStore}>
          <React.Suspense fallback={null}>
            <ModeSwitcher />
          </React.Suspense>
        </ReduxProvider>
      </BrowserRouter>,
    );
  };

  if (process.env.NODE_ENV === 'development') {
    render();
  }

  if (process.env.NODE_ENV !== 'development') {
    loadableReady(() => {
      render();
    });
  }
};

bootstrap();
