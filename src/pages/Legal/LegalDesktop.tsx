import * as React from 'react';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/desktop/Meta';
import LegalRouter from '~/routes/LegalRouter';

const LegalDesktop: React.FC = () => (
  <>
    <Meta />
    <Header />
    <ContentArea>
      <LegalRouter />
    </ContentArea>
    <Footer />
  </>
);

export default LegalDesktop;
