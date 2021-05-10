import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import buildUrl from '~/utils/buildUrl';
import { UIContext } from '~/context/ui';

const scope = 'containers.Docs.index';

const DocsNavBar: React.FC = () => {
  const intl = useIntl();
  const { state } = useContext(UIContext);
  const { locale } = state;

  return (
    <nav>
      <ul>
        <li>
          <Link to={buildUrl(locale, '/docs')}>Index</Link>
        </li>
        <li>
          <Link to={buildUrl(locale, '/docs/core')}>Core</Link>
        </li>
        <li>
          <Link to={buildUrl(locale, '/docs/knex')}>Knex</Link>
        </li>
      </ul>
    </nav>
  )
}

export default DocsNavBar;
