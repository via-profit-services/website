import * as React from 'react';

import Header from '~/render/desktop/components/Header';
import ContentArea from '~/render/desktop/components/ContentArea';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Routes from './Routes';

const Legal: React.FC = () => (
  <>
    <Meta />
    <Header />
    <ContentArea>
      <Routes />
    </ContentArea>
    <Footer />
  </>
);

export default Legal;
