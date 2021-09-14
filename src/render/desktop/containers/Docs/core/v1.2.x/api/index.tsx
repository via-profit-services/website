import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import H1 from '~/render/desktop/components/Typography/H1';

const Middlewares: React.FC = () => {
  const params = useParams();
  console.info('Api of Core v1.2.x', { params });

  return (
    <>
      <Helmet>
        <title>Core v1.2.x api</title>
        <meta name="description" content="Core api" />
      </Helmet>

      <H1>Api of Core v1.2.x</H1>
    </>
  );
};

export default Middlewares;
