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
const Index = loadable(() => import('~/pages/Docs/knex/v1.1/index'), options);

const Knexv1Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default Knexv1Router;
