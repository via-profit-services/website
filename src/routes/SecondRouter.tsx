import * as React from 'react';
import loadable, { OptionsWithoutResolver } from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoadingIndicator from '~/components/desktop/LoadingIndicator';

const options: OptionsWithoutResolver<any> = {
  fallback: <LoadingIndicator />,
};

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

const CookiePolicy = loadable(
  () => import('~/pages/Legal/CookiePolicy'),
  options,
);

const Terms = loadable(() => import('~/pages/Legal/Terms'), options);
const PrivacyPolicy = loadable(
  () => import('~/pages/Legal/PrivacyPolicy'),
  options,
);

const SecondRouter: React.FC = () => {
  const mode = useSelector<ReduxState, ReduxSelectedMode>(state => state.mode);
  const Template =
    mode === 'desktop'
      ? SecondPageTemplateDesktop
      : SecondPageTemplateTouchable;

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/cookie" element={<CookiePolicy />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
};

export default SecondRouter;
