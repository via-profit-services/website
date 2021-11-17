import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  List: loadable(
    () => import('~/pages/Examples/children/Introduction'),
    options,
  ),
  Fallback: loadable(
    () => import('~/components/both/FallbackContent/index'),
    options,
  ),
};

const ExamplesRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict exact path={path} component={pages.List} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default ExamplesRoutes;
