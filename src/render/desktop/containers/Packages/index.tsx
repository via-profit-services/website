import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const List = loadable(
  () => import('~/render/desktop/containers/Packages/List'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Core = loadable(
  () => import('~/render/desktop/containers/Packages/Core'),
  {
    fallback: <LoadingIndicator />,
  },
);

const knex = loadable(
  () => import('~/render/desktop/containers/Packages/Knex'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Redis = loadable(
  () => import('~/render/desktop/containers/Packages/Redis'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Packages: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Meta />
      <Header />
      <ContentArea>
        <Switch>
          <Route strict exact path={path} component={List} />
          <Route strict path={`${path}/core`} component={Core} />
          <Route strict path={`${path}/knex`} component={knex} />
          <Route strict path={`${path}/redis`} component={Redis} />
          <Route component={Fallback} />
        </Switch>
      </ContentArea>
      <Footer />
    </>
  );
};

export default Packages;
