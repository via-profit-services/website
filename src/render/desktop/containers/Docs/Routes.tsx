import * as React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = loadable(
  () => import('~/render/desktop/containers/Docs/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Core = loadable(
  () => import('~/render/desktop/containers/Docs/core/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Knex = loadable(
  () => import('~/render/desktop/containers/Docs/knex/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const DocsRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/core`} component={Core} />
      <Route strict path={`${path}/knex`} component={Knex} />
      <Route strict path={path} component={Introduction} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default DocsRoutes;
