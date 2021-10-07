import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/render/desktop/components/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';
import content from 'docs/core/v2.0.x/context.md';

const Context: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Context',
            description: 'Meta title of core.v2.0 Context',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Core v2 Context',
            description: 'Meta description of core.v2.0 Context',
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
            link="/docs/core/v2.0.x"
            position={3}
            label={
              <FormattedMessage
                defaultMessage="Core v2.0"
                description="Breadcrumbs. Core v2.0.x"
              />
            }
          />
          <Crumb
            position={4}
            label={
              <FormattedMessage
                defaultMessage="Context"
                description="Breadcrumbs. Core v2.0.x Context"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default Context;
