import * as React from 'react';

import { DEFAULT_LOCALE } from '~/utils/constants';

type UrlBuilder = (locale: string, path: string) => string;
export const builder: UrlBuilder = (locale, path) => {
  const pathArray = `/${locale}/${path}`.split('/');

  if (pathArray[1] === DEFAULT_LOCALE) {
    pathArray.splice(1, 1);
  }
  const newPath = pathArray.join('/');

  return newPath
    .replace(/\/{1,}/g, '/') // remove double slash
    .replace(/(?<=[a-z-0-9.])\/$/, ''); // remove trailing slash
};

export const useUrlBuilder = (locale: string) => {
  const builderFn = React.useCallback(
    (path: string) => builder(locale, path),
    [locale],
  );

  return builderFn;
};

export default builder;
