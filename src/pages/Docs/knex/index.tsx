/* eslint-disable import/extensions */
import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(() => import('~/pages/Fallback/index'), {
  fallback: <LoadingIndicator />,
});

const KnexVer1dot1 = loadable(() => import('~/pages/Docs/knex/v1.1.x/index'), {
  fallback: <LoadingIndicator />,
});

type UrlParams = {
  version?: string;
};

const Knex: React.FC = () => {
  const { path } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={`${path}/v1.1.x`} component={KnexVer1dot1} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Knex;
