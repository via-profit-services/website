import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as OfflinePlugin from 'offline-plugin/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import App from '~/providers/App';

const bootstrap = async () => {
  const MOUNT_NODE = document.getElementById('app') as HTMLElement;

  const render = () => {
    ReactDOM.render(
      <>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </>,
      MOUNT_NODE,
    );
  };

  // declare const module: any;
  if (module.hot) {
    // eslint-disable-next-line no-console
    console.log('HMR is active');
    module.hot.accept(['./providers/App'], () => {
      render();
    });
  }

  loadableReady(() => {
    render();
  });

  if (process.env.NODE_ENV !== 'development') {
    OfflinePlugin.install();
  }
};

bootstrap();
