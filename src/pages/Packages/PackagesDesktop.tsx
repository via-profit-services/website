import * as React from 'react';
import styled from 'styled-components';
import { useIntl, FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import Header from '~/components/desktop/Header';
import ContentArea from '~/components/desktop/ContentArea';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/desktop/Meta';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';

const Wrapper = styled.div`
  flex: 1;
  background-color: ${props => props.theme.color.background.secondary};
`;

const Layout = styled(ContentArea)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const Main = styled.main`
  flex: 1;
  width: calc(100% - 250px);
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const PackagesDesktop: React.FC = () => {
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
      <Wrapper>
        <Layout>
          <Main>
            <article>
              <section>
                <nav>
                  <Breadcrumbs>
                    <Crumb home />
                    <Crumb
                      position={2}
                      label={
                        <FormattedMessage
                          defaultMessage="Packages"
                          description="Breadcrumbs. Packages"
                        />
                      }
                    />
                  </Breadcrumbs>
                </nav>
                Packages list here
              </section>
            </article>
          </Main>
        </Layout>
      </Wrapper>

      <Footer />
    </>
  );
};

export default PackagesDesktop;
