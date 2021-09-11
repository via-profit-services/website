import * as React from 'react';
import Loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = Loadable(
  () => import('~/render/desktop/containers/Fallback'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = Loadable(
  () => import('~/render/desktop/containers/Docs/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Core = Loadable(() => import('~/render/desktop/containers/Docs/core'), {
  fallback: <LoadingIndicator />,
});

const Knex = Loadable(() => import('~/render/desktop/containers/Docs/knex'), {
  fallback: <LoadingIndicator />,
});

const Docs: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/core`} component={Core} />
      <Route strict path={`${path}/knex`} component={Knex} />
      <Route strict exact path={path} component={Introduction} />
      <Route component={() => <>Docs / core</>} />
    </Switch>
  );
};

export default Docs;
