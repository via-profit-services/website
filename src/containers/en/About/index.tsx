import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

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
      <ContentArea>
        <h1>About</h1>
        <p>Lorem ipsum of About</p>
      </ContentArea>
    </>
  )
}

export default About;
