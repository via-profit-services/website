import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import content from '~content/docs/redis/v2.0/api.md';

const Api: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Redis Api',
            description: 'Meta title of redis.v2.0 api',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Redis Api',
            description: 'Meta description of redis.v2.0 api',
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
            link="/docs/redis"
            position={3}
            label={
              <FormattedMessage
                defaultMessage="Redis"
                description="Breadcrumbs. Docs redis"
              />
            }
          />
          <Crumb
            position={4}
            label={
              <FormattedMessage
                defaultMessage="Api"
                description="Breadcrumbs. Redis api"
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
