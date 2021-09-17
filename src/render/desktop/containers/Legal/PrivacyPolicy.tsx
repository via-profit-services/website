import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';

const PrivacyPolicy: React.FC = () => (
  <section>
    <H1>
      <FormattedMessage defaultMessage="Privacy Policy" />
    </H1>
  </section>
);

export default PrivacyPolicy;
