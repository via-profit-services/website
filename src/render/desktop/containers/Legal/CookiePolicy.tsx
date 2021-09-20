import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';

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
    <H1>
      <FormattedMessage defaultMessage="Cookie policy" />
    </H1>
  </section>
);

export default CookiePolicy;
