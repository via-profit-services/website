import * as React from 'react';
import { Helmet } from 'react-helmet';

import H1 from '~/render/desktop/components/Typography/H1';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Documentation</title>
      <meta name="description" content="Documentation" />
    </Helmet>
    <H1>Documentation</H1>
  </>
);

export default Introduction;
