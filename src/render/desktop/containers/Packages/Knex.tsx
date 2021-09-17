import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';

const Knex: React.FC = () => (
  <section>
    <H1>
      <FormattedMessage defaultMessage="Knex" />
    </H1>
  </section>
);

export default Knex;
