import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import content from '~content/docs/knex/v1.1/readme.md';

const Introduction: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Getting started',
            description: 'Meta title of knex.v1.1',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Knex v1 getting started',
            description: 'Meta description of knex.v1.1',
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
            link="/docs/knex"
            position={3}
            label={
              <FormattedMessage
                defaultMessage="Knex"
                description="Breadcrumbs. Docs knex"
              />
            }
          />
          <Crumb
            position={4}
            label={
              <FormattedMessage
                defaultMessage="Knex v1.1"
                description="Breadcrumbs. Knex v1.1"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default Introduction;
