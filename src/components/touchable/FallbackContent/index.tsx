import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/components/both/Typography/H1';
import Paragraph from '~/components/both/Typography/Paragraph';

const FallbackContent: React.FC = () => (
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

export default FallbackContent;
