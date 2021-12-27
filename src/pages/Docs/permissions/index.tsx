/* eslint-disable import/extensions */
import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useMatch } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const Fallback = loadable(
  () => import('~/components/both/FallbackContent/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Ver2 = loadable(() => import('~/pages/Docs/permissions/v2.0/index'), {
  fallback: <LoadingIndicator />,
});

type UrlParams = {
  version?: string;
};

const Permissions: React.FC = () => {
  const { path } = useMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={path} component={Ver2} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Permissions;