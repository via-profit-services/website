import * as React from 'react';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/desktop/Meta';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';
import LegalRouter from '~/routes/LegalRouter';

const LegalDesktop: React.FC = () => (
  <>
    <Meta />
    <Header />
    <ContentArea>
      <LegalRouter />
    </ContentArea>
    <Footer />
    <ScrollTopButton />
  </>
);

export default LegalDesktop;
