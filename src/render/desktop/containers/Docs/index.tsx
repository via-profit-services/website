import * as React from 'react';
import Loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Sidebar from '~/render/desktop/containers/Docs/Sidebar';

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
              <Route strict exact path={path} component={Introduction} />
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
