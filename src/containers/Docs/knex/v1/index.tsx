import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Introduction from '~/containers/Docs/knex/v1/introduction/Loadable';
import Api from '~/containers/Docs/knex/v1/api/Loadable';
import NotFound from '~/containers/NotFound/Loadable';

const DocsKnexVer1: React.FC = () => (
  <Switch>
    <Route strict exact path="/docs/knex/api" component={Api} />
    <Route strict exact path="/docs/knex" component={Introduction} />
    <Route component={NotFound} />
  </Switch>
);

export default DocsKnexVer1;
