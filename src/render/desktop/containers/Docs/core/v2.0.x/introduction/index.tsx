import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Core v2.0.x</title>
      <meta
        name="description"
        content="Documentation of @via-profit-services/core"
      />
    </Helmet>

    <H1>
      <FormattedMessage defaultMessage="Introduction of @via-profit-services/core v2.0.x" />
    </H1>
  </>
);

export default Introduction;
