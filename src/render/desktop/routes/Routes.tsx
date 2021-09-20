import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Home = loadable(() => import('~/render/desktop/containers/Home/index'), {
  fallback: <LoadingIndicator />,
});

const Docs = loadable(() => import('~/render/desktop/containers/Docs/index'), {
  fallback: <LoadingIndicator />,
});

const Legal = loadable(
  () => import('~/render/desktop/containers/Legal/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Packages = loadable(
  () => import('~/render/desktop/containers/Packages/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Examples = loadable(
  () => import('~/render/desktop/containers/Examples/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Routes: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/docs" component={Docs} />
      <Route path="/packages" component={Packages} />
      <Route path="/legal" component={Legal} />
      <Route path="/examples" component={Examples} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Routes;
