import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Core v2.0.x</title>
      <meta
        name="description"
        content="Documentation of @via-profit-services/core"
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
              defaultMessage="Docs"
              description="Breadcrumbs. Docs"
            />
          }
        />
        <Crumb
          position={3}
          label={
            <FormattedMessage
              defaultMessage="Core v2.0"
              description="Breadcrumbs. Core v2.0.x"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <H1>
      <FormattedMessage defaultMessage="Introduction of @via-profit-services/core v2.0.x" />
    </H1>
  </>
);

export default Introduction;
