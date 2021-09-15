import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Home = loadable(() => import('~/render/desktop/containers/Home'), {
  fallback: <LoadingIndicator />,
});

const Docs = loadable(() => import('~/render/desktop/containers/Docs'), {
  fallback: <LoadingIndicator />,
});

const Legal = loadable(() => import('~/render/desktop/containers/Legal'), {
  fallback: <LoadingIndicator />,
});

const Packages = loadable(
  () => import('~/render/desktop/containers/Packages'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/docs" component={Docs} />
    <Route path="/packages" component={Packages} />
    <Route path="/legal" component={Legal} />
    <Route component={Fallback} />
  </Switch>
);

export default Routes;
