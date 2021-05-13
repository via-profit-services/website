import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import Introduction from '~/containers/Docs/introduction/Loadable';
import Core from '~/containers/Docs/core/Loadable';
import Knex from '~/containers/Docs/knex/Loadable';
import ContentArea from '~/components/ContentArea';
import NotFound from '~/containers/NotFound/Loadable';
import Sidebar from '~/containers/Docs/Sidebar';

const DocsIndex: React.FC = () => (
  <>
    <AppBar />
    <ContentArea
      sidebar={<Sidebar />}
    >
      <Switch>
        <Route strict path="/docs/core" component={Core} />
        <Route strict path="/docs/knex" component={Knex} />
        <Route strict exact path="/docs" component={Introduction} />
        <Route component={NotFound} />
      </Switch>
    </ContentArea>
    <Footer />
  </>
);

export default DocsIndex;
