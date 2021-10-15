import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from '~/components/desktop/Typography/H1';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Core v1.2.x</title>
      <meta
        name="description"
        content="Documentation of @via-profit-services/core"
      />
    </Helmet>

    <H1>
      <FormattedMessage defaultMessage="Introduction of @via-profit-services/core v1.2.x" />
    </H1>
  </>
);

export default Introduction;
