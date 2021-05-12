import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Introduction from '~/containers/Docs/core/v1/introduction/Loadable';
import Api from '~/containers/Docs/core/v1/api/Loadable';
import Middlewares from '~/containers/Docs/core/v1/middlewares/Loadable';
import NotFound from '~/containers/NotFound/Loadable';

const DocsCoreVer1: React.FC = () => (
  <Switch>
    <Route strict exact path="/docs/core/api" component={Api} />
    <Route strict exact path="/docs/core/middlewares" component={Middlewares} />
    <Route strict exact path="/docs/core" component={Introduction} />
    <Route component={NotFound} />
  </Switch>
);

export default DocsCoreVer1;
