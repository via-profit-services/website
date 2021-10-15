import React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
  Api: loadable(() => import('~/pages/Docs/children/core/v2.0.x/api'), options),
  Connections: loadable(
    () => import('~/pages/Docs/children/core/v2.0.x/connections'),
    options,
  ),
  Context: loadable(
    () => import('~/pages/Docs/children/core/v2.0.x/context'),
    options,
  ),
  Examples: loadable(
    () => import('~/pages/Docs/children/core/v2.0.x/examples'),
    options,
  ),
  GettingStarted: loadable(
    () => import('~/pages/Docs/children/core/v2.0.x/getting-started'),
    options,
  ),
  Middlewares: loadable(
    () => import('~/pages/Docs/children/core/v2.0.x/middlewares'),
    options,
  ),
  Typedefs: loadable(
    () => import('~/pages/Docs/children/core/v2.0.x/typedefs'),
    options,
  ),
};

const Core: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/api`} component={pages.Api} />
      <Route
        strict
        path={`${path}/connections`}
        component={pages.Connections}
      />
      <Route strict path={`${path}/context`} component={pages.Context} />
      <Route strict path={`${path}/examples`} component={pages.Examples} />
      <Route
        strict
        path={`${path}/getting-started`}
        component={pages.GettingStarted}
      />
      <Route
        strict
        path={`${path}/middlewares`}
        component={pages.Middlewares}
      />
      <Route strict path={`${path}/typedefs`} component={pages.Typedefs} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default Core;
