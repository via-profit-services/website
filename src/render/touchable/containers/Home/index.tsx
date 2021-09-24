import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import Header from '~/render/touchable/components/Header';
// import Footer from '~/render/touchable/components/Footer';
import Meta from '~/render/desktop/components/Meta';

import SectionWhatIsIt from '~/render/desktop/containers/Home/SectionWhatIsIt';
import SectionWhy from '~/render/desktop/containers/Home/SectionWhy';
import SectionPackages from '~/render/desktop/containers/Home/SectionPackages';
import SectionOpenSource from '~/render/desktop/containers/Home/SectionOpenSource';
import SectionTypescript from '~/render/desktop/containers/Home/SectionTypescript';

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
      <Header />
      <main>
        <SectionWhatIsIt />
        <SectionWhy />
        <SectionPackages />
        <SectionOpenSource />
        <SectionTypescript />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePageDesktop;
