import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';
import HomePageTemplate from '~/templates/HomePageTemplate';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const DocsRouter = loadable(() => import('~/routes/DocsRouter/index'), options);
const Home = loadable(() => import('~/pages/Home/index'), options);
const Fallback = loadable(() => import('~/pages/Fallback/index'), options);
const FallbackContent = loadable(
  () => import('~/components/both/FallbackContent'),
  options,
);

const RootRouter: React.FC = () => {
  const { pathname, hash } = useLocation();
  const locationPathnameRef = React.useRef<string>('');

  React.useEffect(() => {
    // nothing to do if pathname not be changed
    // maybe it hash only changed
    if (locationPathnameRef.current === pathname) {
      return;
    }

    locationPathnameRef.current = pathname;

    // scroll to top (without animation)
    if (!hash) {
      window?.scrollTo(0, 0);

      return;
    }

    // if hash exist in url then scroll to hash (without animation)
    if (hash) {
      const element = document?.querySelector(
        `a[id="${hash.replace(/^#/, '')}"]`,
      );
      if (element) {
        const yOffset = -61; // app header height
        const y =
          element?.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window?.scrollTo({ top: y, behavior: 'auto' });
      }
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageTemplate />}>
        <Route index element={<Home />} />
        <Route path="*" element={<FallbackContent />} />
      </Route>

      <Route path="/docs/*" element={<DocsRouter />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  );
};

export default RootRouter;
