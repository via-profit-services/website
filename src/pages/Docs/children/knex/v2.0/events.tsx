import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import content from '~content/docs/knex/v2.0/events.md';

const Events: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Events',
            description: 'Meta title of knex.v2.0 events',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Knex v2 events',
            description: 'Meta description of knex.v2.0 events',
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
                defaultMessage="Events"
                description="Breadcrumbs. Knex events"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default Events;
