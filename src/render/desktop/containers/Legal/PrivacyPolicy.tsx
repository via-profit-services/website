import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';

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
    <H1>
      <FormattedMessage defaultMessage="Privacy Policy" />
    </H1>
  </section>
);

export default PrivacyPolicy;
