import * as React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';
import DocPageTemplate from '~/templates/DocPageTemplate';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const Fallback = loadable(
  () => import('~/components/both/FallbackContent/index'),
  options,
);

const Introduction = loadable(
  () => import('~/pages/Docs/children/introduction/index'),
  options,
);

const CoreRouter = loadable(
  () => import('~/routes/DocsRouter/CoreRouter/index'),
  options,
);

const KnexRouter = loadable(
  () => import('~/routes/DocsRouter/KnexRouter/index'),
  options,
);

const DocsRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<DocPageTemplate />}>
      <Route index element={<Introduction />} />
      <Route path="/core/*" element={<CoreRouter />} />
      <Route path="/knex/*" element={<KnexRouter />} />
      <Route path="*" element={<Fallback />} />
    </Route>
  </Routes>
);

export default DocsRoutes;
