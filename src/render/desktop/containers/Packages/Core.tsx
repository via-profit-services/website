import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import { SafeFrameSection } from '~/render/desktop/components/SafeFrame';

const Core: React.FC = () => (
  <SafeFrameSection>
    <H1>
      <FormattedMessage defaultMessage="Core" />
    </H1>
  </SafeFrameSection>
);

export default Core;
