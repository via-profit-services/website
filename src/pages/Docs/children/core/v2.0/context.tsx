import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/core/v2.0/context.md';

const Context: React.FC = () => {
  const intl = useIntl();

  return (
    <>
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
      <RenderMarkdown>{content}</RenderMarkdown>
    </>
  );
};

export default Context;
