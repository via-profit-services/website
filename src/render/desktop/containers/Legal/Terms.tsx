import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';

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
    <H1>
      <FormattedMessage defaultMessage="Terms of Use" />
    </H1>
  </section>
);

export default Terms;
