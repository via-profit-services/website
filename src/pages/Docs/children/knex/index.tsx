/* eslint-disable import/extensions */
import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(
  () => import('~/components/both/FallbackContent/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const KnexVer1 = loadable(
  () => import('~/pages/Docs/children/knex/v1.1/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const KnexVer2 = loadable(
  () => import('~/pages/Docs/children/knex/v2.0/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

type UrlParams = {
  version?: string;
};

const Knex: React.FC = () => {
  const { path } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={`${path}/versions/v1.1`} component={KnexVer1} />
      <Route strict path={path} component={KnexVer2} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Knex;
