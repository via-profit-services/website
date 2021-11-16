import React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
  GettingStarted: loadable(
    () => import('~/pages/Docs/children/redis/v2.0/getting-started'),
    options,
  ),
  Api: loadable(() => import('~/pages/Docs/children/redis/v2.0/api'), options),
};

const Redis: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route
        strict
        path={`${path}/getting-started`}
        component={pages.GettingStarted}
      />
      <Route strict path={`${path}/api`} component={pages.Api} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default Redis;
