import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

import LoadingIndicator from '~/render/touchable/components/LoadingIndicator';

const HomePage = loadable(
  () => import('~/render/touchable/containers/Home/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const NotFound = loadable(
  () => import('~/render/touchable/containers/Fallback/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

export const TouchableRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path="/*" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default TouchableRoutes;
