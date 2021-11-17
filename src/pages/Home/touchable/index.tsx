import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import Meta from '~/components/both/Meta';
import SectionWhatsIsIt from './SectionWhatsIsIt';
import SectionPackages from './SectionPackages';
import SectionMain from './SectionMain';
import SectionWhy from './SectionWhy';
import SectionOpenSource from './SectionOpenSource';
import SectionTypescript from './SectionTypescript';

const Main = styled.main`
  margin-top: -3.4rem;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const HomeTouchable: React.FC = () => {
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
        <SectionWhatsIsIt />
        <SectionWhy />
        <SectionPackages />
        <SectionOpenSource />
        <SectionTypescript />
      </Main>

      <Footer />
    </>
  );
};

export default HomeTouchable;
