import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const List = loadable(
  () => import('~/render/desktop/containers/Examples/List'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Legal: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Meta />
      <Header />
      <ContentArea>
        <Switch>
          <Route strict path={path} component={List} />
          <Route component={Fallback} />
        </Switch>
      </ContentArea>
      <Footer />
    </>
  );
};

export default Legal;
