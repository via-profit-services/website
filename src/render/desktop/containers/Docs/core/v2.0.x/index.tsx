import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const Api = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/api'),
  { fallback: <LoadingIndicator /> },
);

const Connections = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/connections'),
  { fallback: <LoadingIndicator /> },
);

const Context = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/context'),
  { fallback: <LoadingIndicator /> },
);

const Examples = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/examples'),
  { fallback: <LoadingIndicator /> },
);

const GettingStarted = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/getting-started'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Middlewares = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/middlewares'),
  { fallback: <LoadingIndicator /> },
);

const Typedefs = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/typedefs'),
  { fallback: <LoadingIndicator /> },
);

const Core: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/introduction`} component={Introduction} />
      <Route strict path={`${path}/api`} component={Api} />
      <Route strict path={`${path}/connections`} component={Connections} />
      <Route strict path={`${path}/context`} component={Context} />
      <Route strict path={`${path}/examples`} component={Examples} />
      <Route
        strict
        path={`${path}/getting-started`}
        component={GettingStarted}
      />
      <Route strict path={`${path}/middlewares`} component={Middlewares} />
      <Route strict path={`${path}/typedefs`} component={Typedefs} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
