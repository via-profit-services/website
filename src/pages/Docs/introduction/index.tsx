import * as React from 'react';
import { Helmet } from 'react-helmet';

import MarkdownRender from '~/components/desktop/RenderMarkdown';
import content from '~content/docs/introduction.md';

const Introduction: React.FC = () => (
  <section>
    <Helmet>
      <title>Documentation</title>
      <meta name="description" content="Documentation" />
    </Helmet>
    <MarkdownRender>{content}</MarkdownRender>
  </section>
);

export default Introduction;
