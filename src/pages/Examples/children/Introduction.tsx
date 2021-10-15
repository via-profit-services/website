import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import MarkdownRender from '~/components/desktop/RenderMarkdown';
import content from '~content/examples/introduction.md';

const Introduction: React.FC = () => (
  <section>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Examples"
              description="Breadcrumbs. Examples"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <MarkdownRender>{content}</MarkdownRender>
  </section>
);

export default Introduction;
