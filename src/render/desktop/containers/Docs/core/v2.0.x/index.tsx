import React from 'react';
import Loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = Loadable(
  () => import('~/render/desktop/containers/Fallback'),
  { fallback: <LoadingIndicator /> },
);

const Setup = Loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/setup'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = Loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Api = Loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/api'),
  { fallback: <LoadingIndicator /> },
);

const Middlewares = Loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/middlewares'),
  { fallback: <LoadingIndicator /> },
);

type UrlParams = {
  version?: string;
};

const Core: React.FC = () => {
  const { path } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict exact path={path} component={Introduction} />
      <Route strict path={`${path}/setup`} component={Setup} />
      <Route strict path={`${path}/api`} component={Api} />
      <Route strict path={`${path}/middlewares`} component={Middlewares} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
