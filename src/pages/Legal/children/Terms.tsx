import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/legal/terms.md';

const Terms: React.FC = () => (
  <section>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Terms"
              description="Breadcrumbs. Terms of use"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <RenderMarkdown>{content}</RenderMarkdown>
  </section>
);

export default Terms;
