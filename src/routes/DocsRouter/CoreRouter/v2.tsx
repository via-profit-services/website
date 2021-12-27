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
  () => import('~/pages/Docs/core/v2.0/introduction'),
  options,
);
const Api = loadable(() => import('~/pages/Docs/core/v2.0/api'), options);
const Connections = loadable(
  () => import('~/pages/Docs/core/v2.0/connections'),
  options,
);
const Context = loadable(
  () => import('~/pages/Docs/core/v2.0/context'),
  options,
);
const Examples = loadable(
  () => import('~/pages/Docs/core/v2.0/examples'),
  options,
);
const GettingStarted = loadable(
  () => import('~/pages/Docs/core/v2.0/getting-started'),
  options,
);
const Middlewares = loadable(
  () => import('~/pages/Docs/core/v2.0/middlewares'),
  options,
);
const Typedefs = loadable(
  () => import('~/pages/Docs/core/v2.0/typedefs'),
  options,
);
const Events = loadable(() => import('~/pages/Docs/core/v2.0/events'), options);

const Corev2Router: React.FC = () => (
  <Routes>
    <Route path="/introduction" element={<Intro />} />
    <Route path="/getting-started" element={<GettingStarted />} />
    <Route path="/api" element={<Api />} />
    <Route path="/middlewares" element={<Middlewares />} />
    <Route path="/connections" element={<Connections />} />
    <Route path="/context" element={<Context />} />
    <Route path="/typedefs" element={<Typedefs />} />
    <Route path="/events" element={<Events />} />
    <Route path="/examples" element={<Examples />} />
    <Route path="*" element={<Fallback />} />
  </Routes>
);

export default Corev2Router;
