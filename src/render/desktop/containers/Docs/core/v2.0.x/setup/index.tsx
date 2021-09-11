import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';

import ErrorBoundary from '~/render/desktop/components/ErrorBoundary';
import AppBar from '~/render/desktop/components/AppBar';
import ContentArea from '~/render/desktop/components/ContentArea';
import H1 from '~/render/desktop/components/Typography/H1';
import Footer from '~/render/desktop/components/Footer';
import LeftSidebar from '~/render/desktop/components/LeftSidebar';
import { SafeFrameSection } from '~/render/desktop/components/SafeFrame';
import RenderMarkdown from '~/render/desktop/components/RenderMarkdown';

import content from '~/docs/core/v2.0.x/setup.md';

const Introduction: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Installation and setup',
            description: 'Meta title of installation and setup',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: '@via-profit-services/core installation and setup',
            description: 'Meta description of installation and setup',
          })}
        />
      </Helmet>
      <AppBar />

      <ContentArea>
        <ErrorBoundary>
          <LeftSidebar />
          <SafeFrameSection>
            <H1>
              <FormattedMessage defaultMessage="Introduction of @via-profit-services/core v2.0.x" />
            </H1>
            <RenderMarkdown>{content}</RenderMarkdown>
          </SafeFrameSection>
        </ErrorBoundary>
      </ContentArea>
      <Footer />
    </>
  );
};

export default Introduction;
