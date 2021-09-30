import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

import Header from '~/render/touchable/components/Header';
import BottomTabsBar from '~/render/touchable/components/BottomTabsBar';
import Footer from '~/render/touchable/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import SectionWhatsIsIt from './SectionWhatsIsIt';
// import SectionPackages from './SectionPackages';
import SectionMain from './SectionMain';
import SectionWhy from './SectionWhy';

const Main = styled.main`
  margin-top: -8rem;
  padding-bottom: 1rem;
  position: relative;
`;

const HomePageDesktop: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Meta />
      <Helmet>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage:
              'Documentation of packages @via-profit-services with examples',
            description: 'Home page. Meta description',
          })}
        />
      </Helmet>
      <Header variant="home-page" />
      <Main>
        <BottomTabsBar />
        <SectionMain />
        <SectionWhatsIsIt />
        <SectionWhy />
        {/* <SectionPackages /> */}
      </Main>

      <Footer />
    </>
  );
};

export default HomePageDesktop;
