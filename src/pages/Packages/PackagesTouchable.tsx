import * as React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import Meta from '~/components/both/Meta';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const PackagesTouchable: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Meta />
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Packages list',
            description: 'Meta title of Packages package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: '@via-profit-services packages list',
            description: 'Meta description of packages page',
          })}
        />
      </Helmet>
      <Header />
      <Main>
        <article>
          <section>Packages list here</section>
        </article>
      </Main>
      <Footer />
    </>
  );
};

export default PackagesTouchable;
