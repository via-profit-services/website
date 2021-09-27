import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import Header from '~/render/touchable/components/Header';
import Meta from '~/render/desktop/components/Meta';
import SectionPackages from './SectionPackages';
import SectionMain from './SectionMain';

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
        <SectionMain />
        <SectionPackages />
      </main>
    </>
  );
};

export default HomePageDesktop;
