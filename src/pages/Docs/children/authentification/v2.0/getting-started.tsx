import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
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
      <nav>
        <Breadcrumbs>
          <Crumb home />
          <Crumb
            link="/docs"
            position={2}
            label={
              <FormattedMessage
                defaultMessage="Docs"
                description="Breadcrumbs. Docs"
              />
            }
          />
          <Crumb
            link="/docs/authentification"
            position={3}
            label={
              <FormattedMessage
                defaultMessage="Authentification"
                description="Breadcrumbs. Docs authentification"
              />
            }
          />
          <Crumb
            position={4}
            label={
              <FormattedMessage
                defaultMessage="Getting started"
                description="Breadcrumbs. Authentification getting started"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default GettingStarted;
