import * as React from 'react';
import { Helmet } from 'react-helmet';

import Header from '~/render/touchable/components/Header';
import ContentArea from '~/render/touchable/components/ContentArea';
import H1 from '~/render/touchable/components/Typography/H1';

const HomePageTouchable: React.FC = () => (
  <>
    <Helmet>
      <html lang="ru" />
      <meta charSet="utf-8" />
      <title>Meta title</title>
      <meta name="description" content="Meta description" />
      <meta name="author" content="Via Profit" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Header />
    <ContentArea>
      <H1>Header 1</H1>
      {/* <RenderDraftjs {...content} /> */}
    </ContentArea>
  </>
);

export default HomePageTouchable;
