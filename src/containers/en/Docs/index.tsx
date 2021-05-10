import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DocsCore from '~/containers/en/Docs/modules/core/Loadable';
import DocsKnex from '~/containers/en/Docs/modules/knex/Loadable';
import DocsIndex from '~/containers/en/Docs/index/Loadable';
import NotFound from '~/containers/en/NotFound/Loadable';

const Docs: React.FC = () => (
  <Switch>
    <Route exact strict path="/docs/core" component={DocsCore} />
    <Route exact strict path="/docs/knex" component={DocsKnex} />
    <Route exact strict path="/docs" component={DocsIndex} />
    <Route component={NotFound} />
  </Switch>
)

export default Docs;
