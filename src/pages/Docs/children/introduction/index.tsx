import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import MarkdownRender from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/introduction.md';

const Introduction: React.FC = () => (
  <section>
    <Helmet>
      <title>Documentation</title>
      <meta name="description" content="Documentation" />
    </Helmet>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Docs"
              description="Breadcrumbs. Docs"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <MarkdownRender>{content}</MarkdownRender>
  </section>
);

export default Introduction;
