import * as React from 'react';
import styled from 'styled-components';

import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Sidebar from '~/render/desktop/components/Sidebar';
import ScrollTopButton from '~/render/desktop/components/ScrollTopButton';
import useSidebar from '~/routes/useSidebar';
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

const Docs: React.FC = () => {
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
              <Routes />
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
