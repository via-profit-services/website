import React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Switch, Route, useMatch, Redirect } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  Fallback: loadable(
    () => import('~/components/both/FallbackContent/index'),
    options,
  ),
  GettingStarted: loadable(
    () => import('~/pages/Docs/permissions/v2.0/getting-started'),
    options,
  ),
  Api: loadable(() => import('~/pages/Docs/permissions/v2.0/api'), options),
  Intro: loadable(
    () => import('~/pages/Docs/permissions/v2.0/introduction'),
    options,
  ),
  Events: loadable(
    () => import('~/pages/Docs/permissions/v2.0/events'),
    options,
  ),
};

const Permissions: React.FC = () => {
  const { path } = useMatch();

  return (
    <Switch>
      <Route
        strict
        exact
        path={`${path}/getting-started`}
        component={pages.GettingStarted}
      />
      <Route strict exact path={`${path}/api`} component={pages.Api} />
      <Route
        strict
        exact
        path={`${path}/introduction`}
        component={pages.Intro}
      />
      <Route strict exact path={`${path}/events`} component={pages.Events} />
      <Redirect strict exact path={path} to={`${path}/introduction`} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default Permissions;
