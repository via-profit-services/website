import * as React from 'react';
import { Helmet } from 'react-helmet';

import H1 from '~/components/desktop/Typography/H1';

const Api: React.FC = () => (
  <>
    <Helmet>
      <title>Core v1.2 api</title>
      <meta name="description" content="Core api" />
    </Helmet>

    <H1>Api of Core v1.2</H1>
  </>
);

export default Api;
