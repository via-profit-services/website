import * as React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const DocsRouter = loadable(() => import('~/routes/DocsRouter/index'), options);

const SecondPageTemplateDesktop = loadable(
  () => import('~/templates/DefaultPageTemplateDesktop'),
  options,
);

const SecondPageTemplateTouchable = loadable(
  () => import('~/templates/DefaultPageTemplateTouchable'),
  options,
);

const Fallback = loadable(
  () => import('~/components/both/FallbackContent/index'),
  options,
);

const Home = loadable(() => import('~/pages/Home/index'), options);

const CookiePolicy = loadable(
  () => import('~/pages/Legal/CookiePolicy'),
  options,
);

const Terms = loadable(() => import('~/pages/Legal/Terms'), options);
const PrivacyPolicy = loadable(
  () => import('~/pages/Legal/PrivacyPolicy'),
  options,
);

const RootRouter: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);
  const SecondPageTemplate =
    mode === 'desktop'
      ? SecondPageTemplateDesktop
      : SecondPageTemplateTouchable;

  // const HomePageTemplate =
  //   mode === 'desktop' ? HomePageTemplateDesktop : HomePageTemplateTouchable;

  return (
    <Routes>
      {/* <Route path="/" element={<HomePageTemplate />} /> */}
      <Route path="/docs/*" element={<DocsRouter />} />

      <Route path="/" element={<SecondPageTemplate />}>
        <Route index element={<Home />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/cookie" element={<CookiePolicy />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
