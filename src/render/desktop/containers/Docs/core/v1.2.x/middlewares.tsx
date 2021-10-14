import * as React from 'react';
import { Helmet } from 'react-helmet';

import H1 from '~/render/desktop/components/Typography/H1';

const Middlewares: React.FC = () => (
  <>
    <Helmet>
      <title>Core v1.2.x middlewares</title>
      <meta name="description" content="Core middlewares" />
    </Helmet>
    <H1>Middlewares in Core v1.2.x</H1>
  </>
);

export default Middlewares;
