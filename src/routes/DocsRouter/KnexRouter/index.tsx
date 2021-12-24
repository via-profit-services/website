import React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const Fallback = loadable(
  () => import('~/components/both/FallbackContent/index'),
  options,
);
const Knexv2Router = loadable(
  () => import('~/routes/DocsRouter/KnexRouter/v2'),
  options,
);
const Knexv1Router = loadable(
  () => import('~/routes/DocsRouter/KnexRouter/v1'),
  options,
);

const KnexRouter: React.FC = () => (
  <Routes>
    <Route path="/*" element={<Knexv2Router />} />
    <Route path="/v1.1/*" element={<Knexv1Router />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default KnexRouter;
