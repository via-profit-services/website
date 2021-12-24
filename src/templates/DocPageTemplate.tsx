import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import Meta from '~/components/both/Meta';
import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Sidebar from '~/components/desktop/Sidebar';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';
import useSidebar from '~/routes/useSidebar';

export type Props = {
  metaTitle?: string;
  metaDescription?: string;
  breadCrumbs?: {
    label: string;
    link?: string;
  }[];
};

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
  padding-top: 1em;
  padding-bottom: 1em;
  padding-right: ${props => props.theme.grid.desktop.gutter}px;
  border-right: 1px solid ${({ theme }) => theme.color.grey[300]};
`;

const Main = styled.main`
  flex: 1;
  width: calc(100% - 250px);
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const Article = styled.article``;

const DocPageTemplate: React.FC<Props> = props => {
  const { metaTitle, metaDescription, breadCrumbs } = props;
  const sidebarMap = useSidebar();

  return (
    <>
      <Meta />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Header />
      <Wrapper>
        <Layout>
          <Aside>
            <Sidebar sidebarMap={sidebarMap} />
          </Aside>
          <Main>
            <Article>
              <section>
                <nav>
                  <Breadcrumbs>
                    <Crumb home />
                    <>
                      {[...(breadCrumbs || [])].map(
                        ({ label, link }, index) => (
                          <Crumb
                            key={index.toString()}
                            position={index + 2}
                            link={link}
                            label={label}
                          />
                        ),
                      )}
                    </>
                  </Breadcrumbs>
                </nav>
                <Outlet />
              </section>
            </Article>
          </Main>
        </Layout>
      </Wrapper>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default DocPageTemplate;
