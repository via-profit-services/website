import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import ErrorBoundary from '~/render/desktop/components/ErrorBoundary';
import AppBar from '~/render/desktop/components/AppBar';
import ContentArea from '~/render/desktop/components/ContentArea';
import H1 from '~/render/desktop/components/Typography/H1';
import Footer from '~/render/desktop/components/Footer';
import LeftSidebar from '~/render/desktop/components/LeftSidebar';
import { SafeFrameSection } from '~/render/desktop/components/SafeFrame';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Core v2.0.x</title>
      <meta
        name="description"
        content="Documentation of @via-profit-services/core"
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
        </SafeFrameSection>
      </ErrorBoundary>
    </ContentArea>
    <Footer />
  </>
);

export default Introduction;
