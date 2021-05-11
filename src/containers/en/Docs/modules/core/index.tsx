import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import MarkdownRender from '~/components/MarkdownRender';
import ContentArea from '~/components/ContentArea';
import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import DocsNavBar from '~/components/DocsNavBar';
import introducion from '~/docs/en/core/v1.1.2/introduction.md';
import badgeImage from '~/../assets/images/via-profit-services-cover.png';

const scope = 'containers.Docs.core';

const DocsCore: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Core',
        })}</title>

      </Helmet>
      <AppBar />
      <ContentArea
        sidebar={<>Sidebar</>}
        menuBar={<DocsNavBar />}
      >
        <MarkdownRender
          components={{
            img: ({ src, alt }) => {
              switch (alt) {
                case 'via-profit-services-cover':
                  return <img width="100%" src={badgeImage} />;

                default:
                  return <img src={String(src)} />;
              }
            },
          }}
        >
          {introducion}
        </MarkdownRender>
      </ContentArea>
      <Footer />
    </>
  )
}

export default DocsCore;
