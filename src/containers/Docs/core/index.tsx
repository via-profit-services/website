import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DocsCoreVer1 from '~/containers/Docs/core/v1';
import NotFound from '~/containers/NotFound/Loadable';

const DocsCore: React.FC = () => (
  <Switch>
    <Route strict path="/docs/core/v1" component={DocsCoreVer1} />
    <Route strict path="/docs/core" component={DocsCoreVer1} />
    <Route component={NotFound} />
  </Switch>
);

export default DocsCore;
