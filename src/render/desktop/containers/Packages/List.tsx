import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';

const List: React.FC = () => (
  <section>
    <H1>
      <FormattedMessage defaultMessage="List of all packages" />
    </H1>
    {[...new Array(15).keys()].map(key => (
      <Paragraph key={key.toString()}>
        Lorem ipsum consequat deserunt sint dolor nostrud enim incididunt
        cupidatat reprehenderit nisi fugiat veniam adipisicing ex consectetur.
      </Paragraph>
    ))}
  </section>
);

export default List;
