import * as React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { useSelector } from 'react-redux';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

const HomePageTemplateDesktop = loadable(
  () => import('~/templates/HomePageTemplateDesktop'),
  options,
);

const HomePageTemplateTouchable = loadable(
  () => import('~/templates/HomePageTemplateTouchable'),
  options,
);

const HomeRoutes: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);
  const Template =
    mode === 'desktop' ? HomePageTemplateDesktop : HomePageTemplateTouchable;

  return <Template />;
};

export default HomeRoutes;
