import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(() => import('~/pages/Fallback/index'), {
  fallback: <LoadingIndicator />,
});

const Introduction = loadable(
  () => import('~/pages/Docs/children/core/v1.2/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Api = loadable(() => import('~/pages/Docs/children/core/v1.2/api'), {
  fallback: <LoadingIndicator />,
});

const Middlewares = loadable(
  () => import('~/pages/Docs/children/core/v1.2/middlewares'),
  { fallback: <LoadingIndicator /> },
);

type UrlParams = {
  version?: string;
};

const Core: React.FC = () => {
  const { path } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={`${path}/introduction`} component={Introduction} />
      <Route strict path={`${path}/api`} component={Api} />
      <Route strict path={`${path}/middlewares`} component={Middlewares} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
