import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const GettingStarted = loadable(
  () =>
    import(
      '~/render/desktop/containers/Docs/core/v2.0.x/getting-started/index'
    ),
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

const Recipes = loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x/recipes/index'),
  { fallback: <LoadingIndicator /> },
);

const Core: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict exact path={path} component={Introduction} />
      <Route
        strict
        path={`${path}/getting-started`}
        component={GettingStarted}
      />
      <Route strict path={`${path}/api`} component={Api} />
      <Route strict path={`${path}/middlewares`} component={Middlewares} />
      <Route strict path={`${path}/recipes`} component={Recipes} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
