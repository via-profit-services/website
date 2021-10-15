import * as React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
  Core: loadable(() => import('~/pages/Docs/core/index'), options),
  Knex: loadable(() => import('~/pages/Docs/knex/index'), options),
  Introduction: loadable(
    () => import('~/pages/Docs/introduction/index'),
    options,
  ),
};

const DocsRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/core`} component={pages.Core} />
      <Route strict path={`${path}/knex`} component={pages.Knex} />
      <Route strict path={path} component={pages.Introduction} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default DocsRoutes;
