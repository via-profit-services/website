import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/components/touchable/Typography/H1';
import Paragraph from '~/components/touchable/Typography/Paragraph';

const FallbackTouchable: React.FC = () => (
  <>
    <H1>
      <FormattedMessage
        defaultMessage="Page not found"
        description="404 page title"
      />
    </H1>
    <Paragraph>
      <FormattedMessage
        defaultMessage="The page may not exist or an error has occurred"
        description="404 page text"
      />
    </Paragraph>
  </>
);

export default FallbackTouchable;
