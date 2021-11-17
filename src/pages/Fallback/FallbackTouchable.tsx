import * as React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import Meta from '~/components/both/Meta';
import FallbackContent from '~/components/touchable/FallbackContent';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const FallbackTouchable: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Meta />
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Page not found',
            description: 'Meta title of 404 error',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Error 404. Page not found',
            description: 'Meta description of 404 error',
          })}
        />
      </Helmet>
      <Header />
      <Main>
        <FallbackContent />
      </Main>
      <Footer />
    </>
  );
};

export default FallbackTouchable;
