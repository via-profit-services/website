import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '~/containers/MainPage/Loadable';
import Docs from '~/containers/Docs/Loadable';
import NotFound from '~/containers/NotFound/Loadable';
import Contact from '~/containers/Contact/Loadable';

const Routes: React.FC = () => (
  <Switch>
    <Route exact strict path={['/ru', '/']} component={MainPage} />
    <Route exact strict path={['/docs', '/ru/docs']} component={Docs} />
    <Route exact strict path={['/contact', '/ru/contact']} component={Contact} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes;
