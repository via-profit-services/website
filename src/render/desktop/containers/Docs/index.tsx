import * as React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Sidebar from '~/render/desktop/containers/Docs/Sidebar';

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = loadable(
  () => import('~/render/desktop/containers/Docs/introduction/index'),
  { fallback: <LoadingIndicator /> },
);

const Core = loadable(
  () => import('~/render/desktop/containers/Docs/core/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Knex = loadable(
  () => import('~/render/desktop/containers/Docs/knex/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Layout = styled(ContentArea)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin-top: 20px;
`;

const Aside = styled.aside`
  width: 280px;
  background-color: ${props => props.theme.color.background.secondary};
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const Main = styled.main`
  flex: 1;
  width: calc(100% - 280px);
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
  background-color: ${props => props.theme.color.background.secondary};
`;

const Docs: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Meta />
      <Header />
      <Layout>
        <Aside>
          <Sidebar />
        </Aside>
        <Main>
          <article>
            <Switch>
              <Route strict path={`${path}/core`} component={Core} />
              <Route strict path={`${path}/knex`} component={Knex} />
              <Route strict path={path} component={Introduction} />
              <Route component={Fallback} />
            </Switch>
          </article>
        </Main>
      </Layout>
      <Footer />
    </>
  );
};

export default Docs;
