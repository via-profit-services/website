import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import loadable, {
  LoadableComponent,
  OptionsWithoutResolver,
} from '@loadable/component';
import { useSelector } from 'react-redux';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

type PagesComponents =
  | 'Home'
  | 'Docs'
  | 'Legal'
  | 'Examples'
  | 'Packages'
  | 'Fallback';

type PageLoadable<T> = Record<PagesComponents, LoadableComponent<T>>;
type PagesMap = Record<ReduxState['mode'], PageLoadable<any>>;

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const pages: PagesMap = {
  desktop: {
    Home: loadable(
      () => import('~/render/desktop/containers/Home/index'),
      options,
    ),
    Docs: loadable(
      () => import('~/render/desktop/containers/Docs/index'),
      options,
    ),
    Legal: loadable(
      () => import('~/render/desktop/containers/Legal/index'),
      options,
    ),
    Packages: loadable(
      () => import('~/render/desktop/containers/Packages/index'),
      options,
    ),
    Examples: loadable(
      () => import('~/render/desktop/containers/Examples/index'),
      options,
    ),
    Fallback: loadable(
      () => import('~/render/desktop/containers/Fallback/index'),
      options,
    ),
  },
  touchable: {
    Home: loadable(
      () => import('~/render/touchable/containers/Home/index'),
      options,
    ),
    Docs: loadable(
      () => import('~/render/touchable/containers/Docs/index'),
      options,
    ),
    Legal: loadable(
      () => import('~/render/desktop/containers/Legal/index'),
      options,
    ),
    Packages: loadable(
      () => import('~/render/desktop/containers/Packages/index'),
      options,
    ),
    Examples: loadable(
      () => import('~/render/desktop/containers/Examples/index'),
      options,
    ),
    Fallback: loadable(
      () => import('~/render/touchable/containers/Fallback/index'),
      options,
    ),
  },
};

const Routes: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <Route exact path="/" component={pages[mode].Home} />
      <Route path="/docs" component={pages[mode].Docs} />
      <Route path="/packages" component={pages[mode].Packages} />
      <Route path="/legal" component={pages[mode].Legal} />
      <Route path="/examples" component={pages[mode].Examples} />
      <Route component={pages[mode].Fallback} />
    </Switch>
  );
};

export default Routes;
