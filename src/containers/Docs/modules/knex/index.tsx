import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import ContentArea from '~/components/ui/ContentArea';
import DocsNavBar from '~/components/DocsNavBar';


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
      <ContentArea>
        <DocsNavBar />
        <h1>Knex</h1>
        <p>Knex documentation</p>
      </ContentArea>
    </>
  )
}

export default DocsKnex;
