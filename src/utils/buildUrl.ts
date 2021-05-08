import { DEFAULT_LOCALE } from './constants';
import { Store } from '~/context/ui/types';

const buildPath = (locale: Store['locale'], path: string) => {
  const pathArray = `/${locale}/${path}`.split('/');
  
  if (pathArray[1] === DEFAULT_LOCALE) {
    pathArray.splice(1, 1);
  }
  const newPath = pathArray.join('/');

  return newPath
    .replace(/\/{1,}/g, '/') // remove double slash
    .replace(/(?<=[a-z-0-9])\/$/ ,''); // remove trailing slash
}

export default buildPath;
