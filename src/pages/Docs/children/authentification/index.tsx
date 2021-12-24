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

const AuthentificationVer2 = loadable(
  () => import('~/pages/Docs/children/authentification/v2.0/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

type UrlParams = {
  version?: string;
};

const Authentification: React.FC = () => {
  const { path } = useMatch<UrlParams>();

  return (
    <Switch>
      <Route strict path={path} component={AuthentificationVer2} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Authentification;
