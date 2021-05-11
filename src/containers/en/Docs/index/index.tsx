import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import ContentArea from '~/components/ContentArea';
import DocsNavBar from '~/components/DocsNavBar';
import docsIndexMarkdown from '~/docs/en/index.md';

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
      <AppBar />
      <ContentArea
        sidebar={<DocsNavBar />}
      >
        <ReactMarkdown>
          {docsIndexMarkdown}
        </ReactMarkdown>
      </ContentArea>
      <Footer />
    </>
  )
}

export default DocsIndex;
