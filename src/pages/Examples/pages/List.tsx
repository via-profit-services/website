import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '~/components/desktop/Typography/H1';
import Paragraph from '~/components/desktop/Typography/Paragraph';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';

const List: React.FC = () => (
  <section>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Examples"
              description="Breadcrumbs. Examples"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <H1>
      <FormattedMessage defaultMessage="Examples" />
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
