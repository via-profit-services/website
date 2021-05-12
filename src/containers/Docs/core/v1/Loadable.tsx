import loadable from '@loadable/component';
import React from 'react';

import LoadingIndicator from '~/components/ui/LoadingIndicator';

export default loadable(() => import('./DocsCoreVer1'), {
  fallback: <LoadingIndicator />,
});
