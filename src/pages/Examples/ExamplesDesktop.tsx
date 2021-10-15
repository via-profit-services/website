import * as React from 'react';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/desktop/Meta';
import ExamplesRouter from '~/routes/ExamplesRouter';

const ExamplesDesktop: React.FC = () => (
  <>
    <Meta />
    <Header />
    <ContentArea>
      <ExamplesRouter />
    </ContentArea>
    <Footer />
  </>
);

export default ExamplesDesktop;
