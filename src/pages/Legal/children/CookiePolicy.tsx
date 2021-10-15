import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/legal/cookie-policy.md';

const CookiePolicy: React.FC = () => (
  <section>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Cookie policy"
              description="Breadcrumbs. Cookie policy"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <RenderMarkdown>{content}</RenderMarkdown>
  </section>
);

export default CookiePolicy;
