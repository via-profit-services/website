import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Meta from '~/components/both/Meta';
import Header from '~/components/desktop/Header';
import Footer from '~/components/desktop/Footer';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';

export type Props = {
  metaTitle?: string;
  metaDescription?: string;
};

const Main = styled.main`
  margin-top: -3.188rem;
  position: relative;
`;

const HomePageTemplate: React.FC<Props> = props => {
  const { metaTitle, metaDescription } = props;

  return (
    <>
      <Meta />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Header variant="home-page" />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default HomePageTemplate;
