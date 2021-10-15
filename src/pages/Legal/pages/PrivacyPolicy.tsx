import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/components/desktop/Typography/H1';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';

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
