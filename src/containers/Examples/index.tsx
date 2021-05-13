import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import ContentArea from '~/components/ContentArea';

const scope = 'containers.Examples';

const Examples: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Examples',
        })}</title>

      </Helmet>
      <AppBar />
      <ContentArea>
        <h1>Examples</h1>
        <p>Lorem ipsum of Examples</p>
      </ContentArea>
      <Footer />
    </>
  )
}

export default Examples;
