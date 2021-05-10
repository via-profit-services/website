import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppInner from './AppInner';
import UIContextWrapper from '~/context/ui';


const App: React.FC = () => (
  <UIContextWrapper>
    <Switch>
      <Route strict path="/ru" render={() => <AppInner locale="ru" />} />
      <Route strict path="/" render={() => <AppInner locale="en" />} />
    </Switch>
  </UIContextWrapper>
)

export default App;
