import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import Meta from '~/components/both/Meta';

const DefaultPageTemplateTouchable: React.FC = () => (
  <>
    <Meta />
    <Header />
    <main>
      <article>
        <Outlet />
      </article>
    </main>
    <Footer />
  </>
);

export default DefaultPageTemplateTouchable;
