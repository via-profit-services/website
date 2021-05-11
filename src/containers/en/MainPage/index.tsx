import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import ContentArea from '~/components/ContentArea';

const scope = 'containers.MainPage';

const MainPage: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Via Profit Services',
        })}</title>
      </Helmet>
      <AppBar />
      <ContentArea>
        <h1>Main page EN</h1>
        <p>Lorem ipsum</p>
        <p>Dolor set amet</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
        <p>Nostrud qui enim tempor Lorem excepteur cillum sit enim dolor ullamco.</p>
      </ContentArea>
      <Footer />
    </>
  )
}

export default MainPage;
