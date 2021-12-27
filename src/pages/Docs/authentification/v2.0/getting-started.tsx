import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/authentification/v2.0/getting-started.md';

const GettingStarted: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Getting started',
            description: 'Meta title of authentification.v2.0 getting started',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Authentification v2 getting started',
            description:
              'Meta description of authentification.v2.0 getting started',
          })}
        />
      </Helmet>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default GettingStarted;
