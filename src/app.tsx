import * as React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { Provider as ReduxProvider } from 'react-redux';

import createReduxStore from '~/redux/store';
import reduxDefaultState from '~/redux/defaultState';
import ApplicationProvider from '~/providers/ApplicationProvider';

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

  const reduxStore = createReduxStore(reduxState);

  const render = () => {
    const enderMethod = process.env.NODE_ENV === 'development' ? ReactDom.render : ReactDom.hydrate;
    enderMethod(
      <BrowserRouter>
        <ReduxProvider store={reduxStore}>
          <ApplicationProvider />
        </ReduxProvider>
      </BrowserRouter>,
      document.getElementById('app'),
    );
  };

  if (process.env.NODE_ENV === 'development') {
    render();
  }

  if (process.env.NODE_ENV !== 'development') {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch(err => {
          console.error('Service worker registration error', err);
        });
      });
    }
    loadableReady(() => {
      render();
    });
  }
};

bootstrap();
