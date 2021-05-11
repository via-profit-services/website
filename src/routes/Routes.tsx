import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DocsEN from '~/containers/en/Docs/Loadable';
import AboutEN from '~/containers/en/About/Loadable';
import ExamplesEN from '~/containers/en/Examples/Loadable';
import MainPageEN from '~/containers/en/MainPage/Loadable';

const Routes: React.FC = () => (
  <Switch>
    <Route strict path="/docs" component={DocsEN} />
    <Route strict path="/about" component={AboutEN} />
    <Route strict path="/examples" component={ExamplesEN} />
    <Route strict exact path="/" component={MainPageEN} />
  </Switch>
)

export default Routes;
