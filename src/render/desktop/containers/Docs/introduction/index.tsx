import * as React from 'react';
import { Helmet } from 'react-helmet';

import H1 from '~/render/desktop/components/Typography/H1';
import Paragraph from '~/render/touchable/components/Typography';

const Introduction: React.FC = () => (
  <>
    <Helmet>
      <title>Documentation</title>
      <meta name="description" content="Documentation" />
    </Helmet>

    <H1>Documentation</H1>
    {[...new Array(15).keys()].map(key => (
      <Paragraph key={key.toString()}>
        Lorem ipsum consequat deserunt sint dolor nostrud enim incididunt
        cupidatat reprehenderit nisi fugiat veniam adipisicing ex consectetur.
      </Paragraph>
    ))}
  </>
);

export default Introduction;
