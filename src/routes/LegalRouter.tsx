import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  PrivacyPolicy: loadable(
    () => import('~/pages/Legal/children/PrivacyPolicy'),
    options,
  ),
  CookiePolicy: loadable(
    () => import('~/pages/Legal/children/CookiePolicy'),
    options,
  ),
  Terms: loadable(() => import('~/pages/Legal/children/Terms'), options),
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
};

const LegalRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route strict exact path={`${path}/terms`} component={pages.Terms} />
      <Route
        strict
        exact
        path={`${path}/privacy`}
        component={pages.PrivacyPolicy}
      />
      <Route
        strict
        exact
        path={`${path}/cookie`}
        component={pages.CookiePolicy}
      />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default LegalRoutes;
