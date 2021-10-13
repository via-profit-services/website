import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const PrivacyPolicy = loadable(
  () => import('~/render/desktop/containers/Legal/PrivacyPolicy'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Terms = loadable(
  () => import('~/render/desktop/containers/Legal/Terms'),
  {
    fallback: <LoadingIndicator />,
  },
);

const CookiePolicy = loadable(
  () => import('~/render/desktop/containers/Legal/CookiePolicy'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const LegalRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/terms`} component={Terms} />
      <Route strict path={`${path}/privacy`} component={PrivacyPolicy} />
      <Route strict path={`${path}/cookie`} component={CookiePolicy} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default LegalRoutes;
