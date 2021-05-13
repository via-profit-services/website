import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import MarkdownRender from '~/components/MarkdownRender';

import content from '~/docs/knex/v1.1.2/api.md';

const scope = 'containers.Docs.knex';

const DocsKnex: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Knex Api',
        })}</title>

      </Helmet>
      <MarkdownRender>
        {content}
      </MarkdownRender>
    </>
  )
}

export default DocsKnex;
