import loadable from '@loadable/component';
import React from 'react';

import LoadingIndicator from '~/components/ui/LoadingIndicator';

export default loadable(() => import(/* webpackChunkName: "DocsIndex" */'./index'), {
  fallback: <LoadingIndicator />,
});
