import * as React from 'react';
import { Helmet } from 'react-helmet';

import H1 from '~/components/desktop/Typography/H1';

const knexApi: React.FC = () => (
  <>
    <Helmet>
      <title>Knex v1.1.x api</title>
      <meta name="description" content="knex api" />
    </Helmet>

    <H1>Knex API v1.1.x</H1>
  </>
);

export default knexApi;
