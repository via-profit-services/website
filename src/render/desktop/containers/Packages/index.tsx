import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import Sidebar, { SidebarMap } from '~/render/desktop/components/Sidebar';

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
  () => import('~/render/desktop/containers/Fallback/index'),
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

const Packages: React.FC = () => {
  const intl = useIntl();
  const { path } = useRouteMatch();

  const sidebarMap: SidebarMap = React.useMemo(
    () => ({
      sections: [
        {
          path: '/packages/core',
          label: intl.formatMessage({
            defaultMessage: 'Core',
            description: 'packages sidebar. Core',
          }),
        },
        {
          path: '/packages/knex',
          label: intl.formatMessage({
            defaultMessage: 'Knex',
            description: 'packages sidebar. Knex',
          }),
        },
        {
          path: '/packages/redis',
          label: intl.formatMessage({
            defaultMessage: 'Redis',
            description: 'packages sidebar. Redis',
          }),
        },
      ],
    }),
    [intl],
  );

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
                <Route strict exact path={path} component={List} />
                <Route strict path={`${path}/core`} component={Core} />
                <Route strict path={`${path}/knex`} component={knex} />
                <Route strict path={`${path}/redis`} component={Redis} />
                <Route component={Fallback} />
              </Switch>
            </article>
          </Main>
        </Layout>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Packages;
