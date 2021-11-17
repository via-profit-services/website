import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

import Header from '~/components/desktop/Header';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/desktop/Meta';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';

import SectionMain from './SectionMain';
import SectionWhatIsIt from './SectionWhatIsIt';
import SectionWhy from './SectionWhy';
import SectionPackages from './SectionPackages';
import SectionOpenSource from './SectionOpenSource';
import SectionTypescript from './SectionTypescript';

const Main = styled.main`
  margin-top: -3.188rem;
  position: relative;
`;

const HomeDesktop: React.FC = () => {
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
        <SectionMain />
        <SectionWhatIsIt />
        <SectionWhy />
        <SectionPackages />
        <SectionOpenSource />
        <SectionTypescript />
      </Main>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default HomeDesktop;
