import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DocsKnexVer1 from '~/containers/Docs/knex/v1/Loadable';
import NotFound from '~/containers/NotFound/Loadable';

const DocsKnex: React.FC = () => (
  <Switch>
    <Route strict path="/docs/knex/v1" component={DocsKnexVer1} />
    <Route strict path="/docs/knex" component={DocsKnexVer1} />
    <Route component={NotFound} />
  </Switch>
);

export default DocsKnex;
