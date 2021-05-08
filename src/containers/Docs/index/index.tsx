import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import ContentArea from '~/components/ui/ContentArea';
import DocsNavBar from '~/components/DocsNavBar';

const scope = 'containers.Docs.index';

const DocsIndex: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Index',
        })}</title>

      </Helmet>
      <ContentArea>
        <DocsNavBar />
        <h1>Documentation</h1>
        <p>Index documentation</p>
      </ContentArea>
    </>
  )
}

export default DocsIndex;
