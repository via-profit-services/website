import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ErrorBoundary from '~/render/desktop/components/ErrorBoundary';
import AppBar from '~/render/desktop/components/AppBar';
import ContentArea from '~/render/desktop/components/ContentArea';
import H1 from '~/render/desktop/components/Typography/H1';
import Footer from '~/render/desktop/components/Footer';
import LeftSidebar from '~/render/desktop/components/LeftSidebar';
import { SafeFrameSection } from '~/render/desktop/components/SafeFrame';

const Middlewares: React.FC = () => {
  const params = useParams();
  console.info('Api of Core v1.2.x', { params });

  return (
    <>
      <Helmet>
        <title>Core v1.2.x api</title>
        <meta name="description" content="Core api" />
      </Helmet>
      <AppBar />

      <ContentArea>
        <ErrorBoundary>
          <LeftSidebar />
          <SafeFrameSection>
            <H1>Api of Core v1.2.x</H1>
          </SafeFrameSection>
        </ErrorBoundary>
      </ContentArea>
      <Footer />
    </>
  );
};

export default Middlewares;
