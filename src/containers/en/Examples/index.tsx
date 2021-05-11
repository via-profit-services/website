import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

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
      <ContentArea>
        <h1>Examples</h1>
        <p>Lorem ipsum of Examples</p>
      </ContentArea>
    </>
  )
}

export default Examples;
