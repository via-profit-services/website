import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/legal/privacy-policy.md';

const PrivacyPolicy: React.FC = () => (
  <section>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Privacy policy"
              description="Breadcrumbs. Privacy policy"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <RenderMarkdown>{content}</RenderMarkdown>
  </section>
);

export default PrivacyPolicy;
