import * as React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Sidebar from '~/render/desktop/components/Sidebar';
import ScrollTopButton from '~/render/desktop/components/ScrollTopButton';
import useSidebar from '~/routes/useSidebar';

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

const Wrapper = styled.div`
  flex: 1;
  background-color: ${props => props.theme.color.background.secondary};
`;

const Layout = styled(ContentArea)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const Aside = styled.aside`
  width: 250px;
  padding-right: ${props => props.theme.grid.desktop.gutter}px;
  border-right: 1px solid ${({ theme }) => theme.color.grey[300]};
`;

const Main = styled.main`
  flex: 1;
  width: calc(100% - 250px);
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const Docs: React.FC = () => {
  const { path } = useRouteMatch();
  const sidebarMap = useSidebar();

  return (
    <>
      <Meta />
      <Header />
      <Wrapper>
        <Layout>
          <Aside>
            <Sidebar sidebarMap={sidebarMap} />
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
      </Wrapper>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default Docs;
