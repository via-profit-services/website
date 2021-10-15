import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import { DEFAULT_LOCALE } from '~/utils/constants';

const Meta: React.FC = () => {
  const intl = useIntl();

  return (
    <Helmet
      htmlAttributes={{
        lang: DEFAULT_LOCALE,
        xmlns: 'http://www.w3.org/1999/xhtml',
      }}
      defaultTitle={intl.formatMessage({
        defaultMessage: 'Via Profit Services',
        description: 'Helmet «defaultTitle» param',
      })}
      titleTemplate={intl.formatMessage({
        defaultMessage: '%s — Via Profit Services',
        description: 'Helmet «titleTemplate» param',
      })}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="author"
        content={intl.formatMessage({
          defaultMessage: 'Via Profit',
          description: 'Helmet meta «author»',
        })}
      />
    </Helmet>
  );
};

export default Meta;
