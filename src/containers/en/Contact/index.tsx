import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import ContentArea from '~/components/ContentArea';

const scope = 'containers.Contact';

const Contact: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Contact',
        })}</title>

      </Helmet>
      <ContentArea>
        <h1>Contact</h1>
        <p>Lorem ipsum of contact</p>
      </ContentArea>
    </>
  )
}

export default Contact;
