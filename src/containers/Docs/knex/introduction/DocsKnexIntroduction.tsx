import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import MarkdownRender from '~/components/MarkdownRender';
import ContentArea from '~/components/ContentArea';

import introduction from '~/docs/knex/v1.1.2/introduction.md';

const scope = 'containers.Docs.knex';

const DocsKnex: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Knex',
        })}</title>

      </Helmet>
      <MarkdownRender>
        {introduction}
      </MarkdownRender>
    </>
  )
}

export default DocsKnex;
