import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';

const Terms: React.FC = () => (
  <section>
    <H1>
      <FormattedMessage defaultMessage="Terms of Use" />
    </H1>
  </section>
);

export default Terms;
