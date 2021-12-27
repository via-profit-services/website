import * as React from 'react';
import { useSelector } from 'react-redux';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const HomeDesktop = loadable(
  () => import('~/pages/Home/desktop/index'),
  options,
);

const HomeTouchable = loadable(
  () => import('~/pages/Home/touchable/index'),
  options,
);

const Home: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);

  return mode === 'desktop' ? <HomeDesktop /> : <HomeTouchable />;
};

export default Home;
