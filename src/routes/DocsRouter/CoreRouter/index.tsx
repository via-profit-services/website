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
const Corev2Router = loadable(
  () => import('~/routes/DocsRouter/CoreRouter/v2'),
  options,
);
const Corev1Router = loadable(
  () => import('~/routes/DocsRouter/CoreRouter/v1'),
  options,
);

const CoreRouter: React.FC = () => (
  <Routes>
    <Route path="/*" element={<Corev2Router />} />
    <Route path="/v1.2/*" element={<Corev1Router />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default CoreRouter;
