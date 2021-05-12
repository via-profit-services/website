import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Docs from '~/containers/Docs/Loadable';
import About from '~/containers/About/Loadable';
import Examples from '~/containers/Examples/Loadable';
import MainPage from '~/containers/MainPage/Loadable';

const Routes: React.FC = () => (
  <Switch>
    <Route strict path="/docs" component={Docs} />
    <Route strict path="/about" component={About} />
    <Route strict path="/examples" component={Examples} />
    <Route strict exact path="/" component={MainPage} />
  </Switch>
)

export default Routes;
