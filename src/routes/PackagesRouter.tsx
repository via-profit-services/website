import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  Introduction: loadable(
    () => import('~/pages/Packages/children/Introduction'),
    options,
  ),
  Accounts: loadable(
    () => import('~/pages/Packages/children/Accounts'),
    options,
  ),
  Core: loadable(() => import('~/pages/Packages/children/Core'), options),
  knex: loadable(() => import('~/pages/Packages/children/Knex'), options),
  Redis: loadable(() => import('~/pages/Packages/children/Redis'), options),
  Phones: loadable(() => import('~/pages/Packages/children/Phones'), options),
  Dataloader: loadable(
    () => import('~/pages/Packages/children/Dataloader'),
    options,
  ),
  Files: loadable(() => import('~/pages/Packages/children/Files'), options),
  Permissions: loadable(
    () => import('~/pages/Packages/children/Permissions'),
    options,
  ),
  Settings: loadable(
    () => import('~/pages/Packages/children/Settings'),
    options,
  ),
  Geography: loadable(
    () => import('~/pages/Packages/children/Geography'),
    options,
  ),
  Messages: loadable(
    () => import('~/pages/Packages/children/Messages'),
    options,
  ),
  Subscriptions: loadable(
    () => import('~/pages/Packages/children/Subscriptions'),
    options,
  ),
  Sms: loadable(() => import('~/pages/Packages/children/Sms'), options),
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
};

const PackagesRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict exact path={path} component={pages.Introduction} />
      <Route strict path={`${path}/core`} component={pages.Core} />
      <Route strict path={`${path}/knex`} component={pages.knex} />
      <Route strict path={`${path}/accounts`} component={pages.Accounts} />
      <Route strict path={`${path}/redis`} component={pages.Redis} />
      <Route strict path={`${path}/phones`} component={pages.Phones} />
      <Route strict path={`${path}/dataloader`} component={pages.Dataloader} />
      <Route strict path={`${path}/files`} component={pages.Files} />
      <Route
        strict
        path={`${path}/permissions`}
        component={pages.Permissions}
      />
      <Route strict path={`${path}/settings`} component={pages.Settings} />
      <Route strict path={`${path}/geography`} component={pages.Geography} />
      <Route strict path={`${path}/messages`} component={pages.Messages} />
      <Route
        strict
        path={`${path}/subscriptions`}
        component={pages.Subscriptions}
      />
      <Route strict path={`${path}/sms`} component={pages.Sms} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default PackagesRoutes;
