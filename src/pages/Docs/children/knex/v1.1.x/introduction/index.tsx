import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from '~/components/desktop/Typography/H1';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Knex v1.1.x</title>
      <meta
        name="description"
        content="Documentation of @via-profit-services/knex"
      />
    </Helmet>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          link="/docs"
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Knex"
              description="Breadcrumbs. Knex"
            />
          }
        />
        <Crumb
          position={3}
          label={
            <FormattedMessage
              defaultMessage="Knex v1.1"
              description="Breadcrumbs. Knex v1.1.x"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <H1>
      <FormattedMessage defaultMessage="Introduction of @via-profit-services/jknex v1.1.x" />
    </H1>
  </>
);

export default Introduction;
