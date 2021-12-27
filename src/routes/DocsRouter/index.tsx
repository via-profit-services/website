import * as React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const DocPageTemplateDesktop = loadable(
  () => import('~/templates/DocPageTemplateDesktop'),
  options,
);

const DocPageTemplateTouchable = loadable(
  () => import('~/templates/DocPageTemplateTouchable'),
  options,
);

const Fallback = loadable(
  () => import('~/components/both/FallbackContent/index'),
  options,
);

const Introduction = loadable(
  () => import('~/pages/Docs/introduction/index'),
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

const DocsRoutes: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);
  const Template =
    mode === 'desktop' ? DocPageTemplateDesktop : DocPageTemplateTouchable;

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Introduction />} />
        <Route path="/core/*" element={<CoreRouter />} />
        <Route path="/knex/*" element={<KnexRouter />} />
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
};

export default DocsRoutes;
