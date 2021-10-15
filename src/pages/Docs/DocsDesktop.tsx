import * as React from 'react';
import styled from 'styled-components';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/desktop/Meta';
import Sidebar from '~/components/desktop/Sidebar';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';
import useSidebar from '~/routes/useSidebar';
import DocsRouter from '~/routes/DocsRouter';

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

const Article = styled.article``;

const DocsDesktop: React.FC = () => {
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
            <Article>
              <DocsRouter />
            </Article>
          </Main>
        </Layout>
      </Wrapper>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default DocsDesktop;
