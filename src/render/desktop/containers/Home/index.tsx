import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import Header from '~/render/desktop/components/Header';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';

import SectionMain from './SectionMain';
import SectionWhatIsIt from './SectionWhatIsIt';
import SectionWhy from './SectionWhy';
import SectionPackages from './SectionPackages';
import SectionOpenSource from './SectionOpenSource';
import SectionTypescript from './SectionTypescript';

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
      <main>
        <SectionMain />
        <SectionWhatIsIt />
        <SectionWhy />
        <SectionPackages />
        <SectionOpenSource />
        <SectionTypescript />
      </main>
      <Footer />
    </>
  );
};

export default HomePageDesktop;
