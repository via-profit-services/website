import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/authentification/v2.0/api.md';

const Api: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Authentification Api',
            description: 'Meta title of authentification.v2.0 api',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Authentification Api',
            description: 'Meta description of authentification.v2.0 api',
          })}
        />
      </Helmet>
      <RenderMarkdown>{content}</RenderMarkdown>
    </section>
  );
};

export default Api;