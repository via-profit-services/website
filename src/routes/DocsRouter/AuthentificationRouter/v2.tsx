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
const Intro = loadable(
  () => import('~/pages/Docs/authentification/v2.0/introduction'),
  options,
);
const Api = loadable(
  () => import('~/pages/Docs/authentification/v2.0/api'),
  options,
);
const GettingStarted = loadable(
  () => import('~/pages/Docs/authentification/v2.0/getting-started'),
  options,
);

const Knexv2Router: React.FC = () => (
  <Routes>
    <Route path="/introduction" element={<Intro />} />
    <Route path="/getting-started" element={<GettingStarted />} />
    <Route path="/api" element={<Api />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default Knexv2Router;
