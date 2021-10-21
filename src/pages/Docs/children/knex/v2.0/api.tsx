import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import content from '~content/docs/knex/v2.0/api.md';

const Api: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Knex Api',
            description: 'Meta title of knex.v2.0 api',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Knex Api',
            description: 'Meta description of knex.v2.0 api',
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
                defaultMessage="Api"
                description="Breadcrumbs. Knex api"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default Api;
