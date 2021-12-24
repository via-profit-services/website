import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/core/v2.0/connections.md';

const Connections: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Connections',
            description: 'Meta title of core.v2.0 connections',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Core v2 connections',
            description: 'Meta description of core.v2.0 connections',
          })}
        />
      </Helmet>
      <RenderMarkdown>{content}</RenderMarkdown>
    </>
  );
};

export default Connections;
