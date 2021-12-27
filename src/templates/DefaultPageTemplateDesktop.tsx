import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/components/desktop/Header';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/both/Meta';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';

const DefaultPageTemplateDesktop: React.FC = () => (
  <>
    <Meta />
    <Header />
    <Outlet />
    <Footer />
    <ScrollTopButton />
  </>
);

export default DefaultPageTemplateDesktop;
