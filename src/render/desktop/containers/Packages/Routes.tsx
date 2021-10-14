import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const List = loadable(
  () => import('~/render/desktop/containers/Packages/List'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Core = loadable(
  () => import('~/render/desktop/containers/Packages/Core'),
  {
    fallback: <LoadingIndicator />,
  },
);

const knex = loadable(
  () => import('~/render/desktop/containers/Packages/Knex'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Redis = loadable(
  () => import('~/render/desktop/containers/Packages/Redis'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Phones = loadable(
  () => import('~/render/desktop/containers/Packages/Phones'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Dataloader = loadable(
  () => import('~/render/desktop/containers/Packages/Dataloader'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Files = loadable(
  () => import('~/render/desktop/containers/Packages/Files'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Permissions = loadable(
  () => import('~/render/desktop/containers/Packages/Permissions'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Settings = loadable(
  () => import('~/render/desktop/containers/Packages/Settings'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Geography = loadable(
  () => import('~/render/desktop/containers/Packages/Geography'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Messages = loadable(
  () => import('~/render/desktop/containers/Packages/Messages'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Subscriptions = loadable(
  () => import('~/render/desktop/containers/Packages/Subscriptions'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Sms = loadable(() => import('~/render/desktop/containers/Packages/Sms'), {
  fallback: <LoadingIndicator />,
});

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const PackagesRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict exact path={path} component={List} />
      <Route strict path={`${path}/core`} component={Core} />
      <Route strict path={`${path}/knex`} component={knex} />
      <Route strict path={`${path}/redis`} component={Redis} />
      <Route strict path={`${path}/phones`} component={Phones} />
      <Route strict path={`${path}/dataloader`} component={Dataloader} />
      <Route strict path={`${path}/files`} component={Files} />
      <Route strict path={`${path}/permissions`} component={Permissions} />
      <Route strict path={`${path}/settings`} component={Settings} />
      <Route strict path={`${path}/geography`} component={Geography} />
      <Route strict path={`${path}/messages`} component={Messages} />
      <Route strict path={`${path}/subscriptions`} component={Subscriptions} />
      <Route strict path={`${path}/sms`} component={Sms} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default PackagesRoutes;
