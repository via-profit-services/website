import * as React from 'react';
import { useSelector } from 'react-redux';
import loadable, { OptionsWithoutResolver } from '@loadable/component';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const Desktop = loadable(() => import('~/pages/Home/desktop/index'), options);
const Touchable = loadable(() => import('~/pages/Home/desktop/index'), options);

const Home: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);

  switch (mode) {
    case 'touchable':
      return <Touchable />;

    case 'desktop':
    default:
      return <Desktop />;
  }
};

export default Home;
