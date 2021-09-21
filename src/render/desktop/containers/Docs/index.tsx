import * as React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Sidebar, { SidebarMap } from '~/render/desktop/components/Sidebar';

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
  const intl = useIntl();

  const sidebarMap: SidebarMap = React.useMemo(
    () => ({
      sections: [
        {
          path: '/docs/core',
          label: intl.formatMessage({
            defaultMessage: 'Core',
            description: 'Docs sidebar. Core',
          }),
          child: [
            {
              path: '/docs/core/v2.0.x',
              label: intl.formatMessage({
                defaultMessage: 'Core v2.0',
                description: 'Docs sidebar. Core v.2.0',
              }),
              child: [
                {
                  path: '/docs/core/v2.0.x',
                  label: intl.formatMessage({
                    defaultMessage: 'Introduction',
                    description: 'Docs sidebar. Core v.2.0 introduction',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/setup',
                  label: intl.formatMessage({
                    defaultMessage: 'Setup guide',
                    description: 'Docs sidebar. Core v.2.0 setup',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/api',
                  label: intl.formatMessage({
                    defaultMessage: 'API Reference',
                    description: 'Docs sidebar. Core v.2.0 API',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/middlewares',
                  label: intl.formatMessage({
                    defaultMessage: 'Use middlewares',
                    description: 'Docs sidebar. Core v.2.0 middlewares',
                  }),
                },
              ],
            },
          ],
        },
        {
          path: '/docs/knex',
          label: intl.formatMessage({
            defaultMessage: 'Knex',
            description: 'Docs sidebar. Knex',
          }),
          child: [
            {
              path: '/docs/knex/v1.1.x',
              label: intl.formatMessage({
                defaultMessage: 'Knex v1.1',
                description: 'Docs sidebar. Knex v.1.1 introduction',
              }),
              child: [
                {
                  path: '/docs/knex/v1.1.x/api',
                  label: intl.formatMessage({
                    defaultMessage: 'API Reference',
                    description: 'Docs sidebar. Knex v.1.1 API',
                  }),
                },
              ],
            },
          ],
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
    </>
  );
};

export default Docs;
