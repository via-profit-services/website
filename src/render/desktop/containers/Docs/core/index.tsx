/* eslint-disable import/extensions */
import React from 'react';
import Loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Fallback = Loadable(
  () => import('~/render/desktop/containers/Fallback'),
  { fallback: <LoadingIndicator /> },
);

const CoreVer1dot2 = Loadable(
  () => import('~/render/desktop/containers/Docs/core/v1.2.x'),
  { fallback: <LoadingIndicator /> },
);

const CoreVer2dot0 = Loadable(
  () => import('~/render/desktop/containers/Docs/core/v2.0.x'),
  { fallback: <LoadingIndicator /> },
);

type UrlParams = {
  version?: string;
};

const Core: React.FC = () => {
  const { path, params, url } = useRouteMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={`${path}/v1.2.x`} component={CoreVer1dot2} />
      <Route strict path={`${path}/v2.0.x`} component={CoreVer2dot0} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Core;
