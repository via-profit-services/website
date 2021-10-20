import * as React from 'react';
import { Helmet } from 'react-helmet';

import H1 from '~/components/desktop/Typography/H1';

const Middlewares: React.FC = () => (
  <>
    <Helmet>
      <title>Core v1.2 middlewares</title>
      <meta name="description" content="Core middlewares" />
    </Helmet>
    <H1>Middlewares in Core v1.2</H1>
  </>
);

export default Middlewares;
