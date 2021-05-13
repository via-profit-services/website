import { useContext } from 'react';

import buildUrl from '~/utils/buildUrl';  
import { UIContext } from '~/context/ui';

const useUrlMap = () => {
  const { state } = useContext(UIContext);
  const { locale } = state;

  const urlMap = {
    home: buildUrl(locale, '/'),
    about: buildUrl(locale, '/about'),
    examples: buildUrl(locale, '/examples'),
    docs: {
      introduction: buildUrl(locale, '/docs'),
      core: {
        introduction: buildUrl(locale, '/docs/core'),
        installation: buildUrl(locale, '/docs/core/installation'),
        api: buildUrl(locale, '/docs/core/api'),
        middlewares: buildUrl(locale, '/docs/core/middlewares'),
      },
      knex: {
        introduction: buildUrl(locale, '/docs/knex'),
        installation: buildUrl(locale, '/docs/installation'),
        api: buildUrl(locale, '/docs/knex/api'),
      },
    },
  };

  return { urlMap, locale };
}

export default useUrlMap;