import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import { UIContext } from '~/context/ui';

const scope = 'components.Meta';
export const Meta: React.FC = () => {
  const { state } = useContext(UIContext);
  const { locale } = state;
  const intl = useIntl();

  return (
    <Helmet>
      <html lang={locale} />
      <meta charSet="utf-8" />
      <title>{intl.formatMessage({
        id: `${scope}.defaultMeta.title`,
        defaultMessage: 'Via Profit services',
      })}</title>
      <meta name="author" content="Via Profit" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default Meta;
