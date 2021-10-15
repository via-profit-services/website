import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(() => import('~/pages/Fallback/index'), {
  fallback: <LoadingIndicator />,
});

const Introduction = loadable(
  () => import('~/pages/Docs/knex/v1.1.x/introduction/index'),
  { fallback: <LoadingIndicator /> },
);

const Api = loadable(() => import('~/pages/Docs/knex/v1.1.x/api/index'), {
  fallback: <LoadingIndicator />,
});

const Knex: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict exact path={path} component={Introduction} />
      <Route strict path={`${path}/api`} component={Api} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Knex;
