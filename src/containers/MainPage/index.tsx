import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import AppBar from '~/components/AppBar';
import ContentArea from '~/components/ui/ContentArea';

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
      <ContentArea>
        <h1>Header</h1>
        <p>Lorem ipsum</p>
        <p>Dolor set amet</p>
      </ContentArea>
    </>
  )
}

export default MainPage;
