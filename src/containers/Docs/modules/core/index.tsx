import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import ContentArea from '~/components/ui/ContentArea';
import DocsNavBar from '~/components/DocsNavBar';

const scope = 'containers.Docs.core';

const DocsCore: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Core',
        })}</title>

      </Helmet>
      <ContentArea>
        <DocsNavBar />
        <h1>Core</h1>
        <p>Core documentation</p>
      </ContentArea>
    </>
  )
}

export default DocsCore;
