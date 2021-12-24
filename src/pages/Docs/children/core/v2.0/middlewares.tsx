import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/core/v2.0/middlewares.md';

const Introduction: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Middlewares',
            description: 'Meta title of core.v2.0 middlewares',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Core v2 middlewares',
            description: 'Meta description of core.v2.0 middlewares',
          })}
        />
      </Helmet>
      <RenderMarkdown>{content}</RenderMarkdown>
    </>
  );
};

export default Introduction;
