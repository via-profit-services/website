import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DocsCore from './modules/core/Loadable';
import DocsKnex from './modules/knex/Loadable';
import DocsIndex from './index/Loadable';
import NotFound from '~/containers/NotFound/Loadable';

const Docs: React.FC = () => (
  <Switch>
    <Route exact strict path={['/ru/docs/core', '/docs/core']} component={DocsCore} />
    <Route exact strict path={['/ru/docs/knex', '/docs/knex']} component={DocsKnex} />
    <Route exact strict path={['/ru/docs', '/docs']} component={DocsIndex} />
    <Route component={NotFound} />
  </Switch>
)

export default Docs;
