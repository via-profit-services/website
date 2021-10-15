import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages = {
  Home: loadable(() => import('~/pages/Home/index'), options),
  Docs: loadable(() => import('~/pages/Docs/index'), options),
  Legal: loadable(() => import('~/pages/Legal/index'), options),
  Packages: loadable(() => import('~/pages/Packages/index'), options),
  Examples: loadable(() => import('~/pages/Examples/index'), options),
  Fallback: loadable(() => import('~/pages/Fallback/index'), options),
};

const Routes: React.FC = () => {
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
    <Switch>
      <Route exact path="/" component={pages.Home} />
      <Route path="/docs" component={pages.Docs} />
      <Route path="/packages" component={pages.Packages} />
      <Route path="/legal" component={pages.Legal} />
      <Route path="/examples" component={pages.Examples} />
      <Route component={pages.Fallback} />
    </Switch>
  );
};

export default Routes;
