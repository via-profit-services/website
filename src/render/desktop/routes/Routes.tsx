import * as React from 'react';
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';
import { useDispatch, useSelector } from 'react-redux';

import { LOCALE_VARIANTS } from '~/utils/constants';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Home = loadable(() => import('~/render/desktop/containers/Home'), {
  fallback: <LoadingIndicator />,
});

const Docs = loadable(() => import('~/render/desktop/containers/Docs'), {
  fallback: <LoadingIndicator />,
});

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Routes: React.FC = () => (
  <Switch>
    <Route path={['/:locale/docs', '/docs']} component={Docs} />
    <Route path={['/:locale', '/']} component={Home} />
    <Route component={() => <>Fallback inner</>} />
  </Switch>
);

// const Routes = () => <Route path={['/:locale', '/']} component={InnerRouter} />;

// export const ARoutes: React.FC = () => {
//   // const { path, params, url } = useRouteMatch<{ locale?: string }>();
//   // console.info({ params, path, url });
//   const { pathname } = useLocation();
//   console.info({ pathname });

//   return (
//     <Switch>
//       {/* <Route path={['/:locale', '/']}> */}
//       <Route exact path="/" component={Home} />
//       <Route component={() => <>Fallback Desktop routes</>} />
//       {/* </Route> */}
//     </Switch>
//   );
// };

export default Routes;
