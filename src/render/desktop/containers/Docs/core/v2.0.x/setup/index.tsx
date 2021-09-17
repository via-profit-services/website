import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/render/desktop/components/RenderMarkdown';

import content from '~/docs/core/v2.0.x/setup.md';

const Introduction: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Installation and setup',
            description: 'Meta title of installation and setup',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: '@via-profit-services/core installation and setup',
            description: 'Meta description of installation and setup',
          })}
        />
      </Helmet>

      <RenderMarkdown>{content}</RenderMarkdown>
    </>
  );
};

export default Introduction;
