import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/core/v2.0/getting-started.md';

const GettingStarted: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Getting started',
            description: 'Meta title of core.v2.0 getting started',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Core v2 getting started',
            description: 'Meta description of core.v2.0 getting started',
          })}
        />
      </Helmet>
      <RenderMarkdown>{content}</RenderMarkdown>
    </>
  );
};

export default GettingStarted;