import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DocsEN from '~/containers/en/Docs/Loadable';
import ContactEN from '~/containers/en/Contact/Loadable';
import MainPageEN from '~/containers/en/MainPage/Loadable';

const Routes: React.FC = () => (
  <Switch>
    <Route strict path="/docs" component={DocsEN} />
    <Route strict path="/contact" component={ContactEN} />
    <Route strict exact path="/" component={MainPageEN} />
  </Switch>
)

export default Routes;
