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
const Index = loadable(
  () => import('~/pages/Docs/children/core/v1.2/index'),
  options,
);

const Corev1Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default Corev1Router;
