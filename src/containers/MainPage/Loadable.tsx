import loadable from '@loadable/component';
import React from 'react';

import LoadingIndicator from '~/components/ui/LoadingIndicator';

export default loadable(() => import('~/containers/MainPage/index'), {
  fallback: <LoadingIndicator />,
});
