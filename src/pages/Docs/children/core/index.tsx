/* eslint-disable import/extensions */
import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(() => import('~/pages/Fallback/index'), {
  fallback: <LoadingIndicator />,
});

const CoreVer1 = loadable(
  () => import('~/pages/Docs/children/core/v1.2/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const CoreVer2 = loadable(
  () => import('~/pages/Docs/children/core/v2.0/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

type UrlParams = {
  version?: string;
};

const Core: React.FC = () => {
  const { path } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={`${path}/v1.2`} component={CoreVer1} />
      <Route strict path={path} component={CoreVer2} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
