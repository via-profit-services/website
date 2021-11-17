import * as React from 'react';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/both/Meta';
import ExamplesRouter from '~/routes/ExamplesRouter';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';

const ExamplesDesktop: React.FC = () => (
  <>
    <Meta />
    <Header />
    <ContentArea>
      <ExamplesRouter />
    </ContentArea>
    <Footer />
    <ScrollTopButton />
  </>
);

export default ExamplesDesktop;
