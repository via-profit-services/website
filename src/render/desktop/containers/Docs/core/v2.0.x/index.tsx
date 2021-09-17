import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const Setup = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/setup/index'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = loadable(
  () =>
    import('~/render/desktop/containers/Docs/core/v2.0.x/introduction/index'),
  { fallback: <LoadingIndicator /> },
);

const Api = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/api/index'),
  { fallback: <LoadingIndicator /> },
);

const Middlewares = loadable(
  () =>
    import('~/render/desktop/containers/Docs/core/v2.0.x/middlewares/index'),
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
