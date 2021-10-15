/* eslint-disable import/extensions */
import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(() => import('~/pages/Fallback/index'), {
  fallback: <LoadingIndicator />,
});

const CoreVer1dot2 = loadable(() => import('~/pages/Docs/core/v1.2.x/index'), {
  fallback: <LoadingIndicator />,
});

const CoreVer2dot0 = loadable(() => import('~/pages/Docs/core/v2.0.x/index'), {
  fallback: <LoadingIndicator />,
});

type UrlParams = {
  version?: string;
};

const Core: React.FC = () => {
  const { path } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={`${path}/v1.2.x`} component={CoreVer1dot2} />
      {/* <Route strict path={`${path}/v2.0.x`} component={CoreVer2dot0} /> */}
      <Route strict path={path} component={CoreVer2dot0} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
