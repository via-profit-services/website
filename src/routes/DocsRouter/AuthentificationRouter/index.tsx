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
const Authentification2Router = loadable(
  () => import('~/routes/DocsRouter/AuthentificationRouter/v2'),
  options,
);

const KnexRouter: React.FC = () => (
  <Routes>
    <Route path="/*" element={<Authentification2Router />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default KnexRouter;
