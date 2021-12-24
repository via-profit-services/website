import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/knex/v2.0/introduction.md';

const Introduction: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Introduction',
            description: 'Meta title of knex.v2.0 introduction',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Knex v2 introduction',
            description: 'Meta description of knex.v2.0 introduction',
          })}
        />
      </Helmet>
      <RenderMarkdown>{content}</RenderMarkdown>
    </>
  );
};

export default Introduction;
