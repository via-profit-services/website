import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import RenderMarkdown from '~/render/desktop/components/RenderMarkdown';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';
import content from 'docs/core/v2.0.x/introduction.md';

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
    <RenderMarkdown>{content}</RenderMarkdown>
  </>
);

export default Introduction;
