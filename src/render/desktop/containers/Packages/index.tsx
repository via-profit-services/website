import * as React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Sidebar, { SidebarMap } from '~/render/desktop/components/Sidebar';
import Routes from './Routes';

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
        {
          path: '/packages/dataloader',
          label: intl.formatMessage({
            defaultMessage: 'Dataloader',
            description: 'packages sidebar. Dataloader',
          }),
        },
        {
          path: '/packages/files',
          label: intl.formatMessage({
            defaultMessage: 'Files',
            description: 'packages sidebar. Files',
          }),
        },
        {
          path: '/packages/phones',
          label: intl.formatMessage({
            defaultMessage: 'Phones',
            description: 'packages sidebar. Phones',
          }),
        },
        {
          path: '/packages/geography',
          label: intl.formatMessage({
            defaultMessage: 'Geography',
            description: 'packages sidebar. Geography',
          }),
        },
        {
          path: '/packages/permissions',
          label: intl.formatMessage({
            defaultMessage: 'Permissions',
            description: 'packages sidebar. Permissions',
          }),
        },
        {
          path: '/packages/messages',
          label: intl.formatMessage({
            defaultMessage: 'Messages',
            description: 'packages sidebar. Messages',
          }),
        },
        {
          path: '/packages/settings',
          label: intl.formatMessage({
            defaultMessage: 'Settings',
            description: 'packages sidebar. Settings',
          }),
        },
        {
          path: '/packages/sms',
          label: intl.formatMessage({
            defaultMessage: 'Sms',
            description: 'packages sidebar. Sms',
          }),
        },
        {
          path: '/packages/subscriptions',
          label: intl.formatMessage({
            defaultMessage: 'Subscriptions',
            description: 'packages sidebar. Subscriptions',
          }),
        },
        {
          path: '/packages/accounts',
          label: intl.formatMessage({
            defaultMessage: 'Accounts',
            description: 'packages sidebar. Accounts',
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
              <Routes />
            </article>
          </Main>
        </Layout>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Packages;
