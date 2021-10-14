import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = loadable(
  () => import('~/render/desktop/containers/Docs/core/v1.2.x/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Api = loadable(
  () => import('~/render/desktop/containers/Docs/core/v1.2.x/api'),
  { fallback: <LoadingIndicator /> },
);

const Middlewares = loadable(
  () => import('~/render/desktop/containers/Docs/core/v1.2.x/middlewares'),
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
