import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  PrivacyPolicy: loadable(
    () => import('~/pages/Legal/pages/PrivacyPolicy'),
    options,
  ),
  CookiePolicy: loadable(
    () => import('~/pages/Legal/pages/CookiePolicy'),
    options,
  ),
  Terms: loadable(() => import('~/pages/Legal/pages/Terms'), options),
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
};

const LegalRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict path={`${path}/terms`} component={pages.Terms} />
      <Route strict path={`${path}/privacy`} component={pages.PrivacyPolicy} />
      <Route strict path={`${path}/cookie`} component={pages.CookiePolicy} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default LegalRoutes;
