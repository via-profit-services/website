import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import ErrorBoundary from '~/render/desktop/components/ErrorBoundary';
import AppBar from '~/render/desktop/components/AppBar';
import ContentArea from '~/render/desktop/components/ContentArea';
import H1 from '~/render/desktop/components/Typography/H1';
import Footer from '~/render/desktop/components/Footer';
import { SafeFrameSection } from '~/render/desktop/components/SafeFrame';

const HomePageDesktop: React.FC = () => (
  <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home page" />
    </Helmet>
    <AppBar />

    <ContentArea>
      <ErrorBoundary>
        <SafeFrameSection>
          <H1>
            <FormattedMessage defaultMessage="Home page" />
          </H1>
        </SafeFrameSection>
      </ErrorBoundary>
    </ContentArea>
    <Footer />
  </>
);

export default HomePageDesktop;
