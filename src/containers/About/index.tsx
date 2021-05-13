import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import ContentArea from '~/components/ContentArea';

const scope = 'containers.About';

const About: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'About',
        })}</title>

      </Helmet>
      <AppBar />
      <ContentArea>
        <h1>About</h1>
        <p>Lorem ipsum of About</p>
      </ContentArea>
      <Footer />
    </>
  )
}

export default About;
