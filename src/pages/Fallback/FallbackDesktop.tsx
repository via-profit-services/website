import * as React from 'react';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/both/Meta';
import FallbackContent from '~/components/desktop/FallbackContent';

const FallbackDesktop: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Meta />
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Page not found',
            description: 'Meta title of 404 error',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Error 404. Page not found',
            description: 'Meta description of 404 error',
          })}
        />
      </Helmet>
      <Header />
      <ContentArea>
        <FallbackContent />
      </ContentArea>
      <Footer />
    </>
  );
};

export default FallbackDesktop;
