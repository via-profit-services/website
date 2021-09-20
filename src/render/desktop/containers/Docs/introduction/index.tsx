import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/desktop/components/Typography/H1';
import Paragraph from '~/render/desktop/components/Typography';
import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';

const Introduction: React.FC = () => (
  <section>
    <Helmet>
      <title>Documentation</title>
      <meta name="description" content="Documentation" />
    </Helmet>
    <nav>
      <Breadcrumbs>
        <Crumb home />
        <Crumb
          position={2}
          label={
            <FormattedMessage
              defaultMessage="Docs"
              description="Breadcrumbs. Docs"
            />
          }
        />
      </Breadcrumbs>
    </nav>
    <H1>Documentation</H1>

    {[...new Array(15).keys()].map(key => (
      <Paragraph key={key.toString()}>
        Lorem ipsum consequat deserunt sint dolor nostrud enim incididunt
        cupidatat reprehenderit nisi fugiat veniam adipisicing ex consectetur.
      </Paragraph>
    ))}
  </section>
);

export default Introduction;
