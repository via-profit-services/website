import * as React from 'react';
import Loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import AppBar from '~/render/desktop/components/AppBar';
import ContentArea from '~/render/desktop/components/ContentArea';
import LeftSidebar from '~/render/desktop/components/LeftSidebar';
import Footer from '~/render/desktop/components/Footer';

const Fallback = Loadable(
  () => import('~/render/desktop/containers/Fallback'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = Loadable(
  () => import('~/render/desktop/containers/Docs/introduction'),
  { fallback: <LoadingIndicator /> },
);

const Core = Loadable(() => import('~/render/desktop/containers/Docs/core'), {
  fallback: <LoadingIndicator />,
});

const Knex = Loadable(() => import('~/render/desktop/containers/Docs/knex'), {
  fallback: <LoadingIndicator />,
});

const Layout = styled(ContentArea)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin-top: 20px;
`;

const ColumnLeft = styled.div`
  width: 280px;
  background-color: ${props => props.theme.color.background};
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const ColumnRight = styled.div`
  flex: 1;
  width: calc(100% - 280px);
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
  background-color: ${props => props.theme.color.background};
`;

const Docs: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <AppBar />
      <Layout>
        <ColumnLeft>
          <LeftSidebar />
        </ColumnLeft>
        <ColumnRight>
          <Switch>
            <Route strict path={`${path}/core`} component={Core} />
            <Route strict path={`${path}/knex`} component={Knex} />
            <Route strict exact path={path} component={Introduction} />
            <Route component={Fallback} />
          </Switch>
        </ColumnRight>
      </Layout>
      <Footer />
    </>
  );
};

export default Docs;
