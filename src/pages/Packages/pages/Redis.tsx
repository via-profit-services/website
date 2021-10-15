import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import H1 from '~/components/desktop/Typography/H1';

const PackagesRedis: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Redis package',
            description: 'Meta title of Redis package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Redis package',
            description: 'Meta description of redis package',
          })}
        />
      </Helmet>
      <nav>
        <Breadcrumbs>
          <Crumb home />
          <Crumb
            link="/packages"
            position={2}
            label={
              <FormattedMessage
                defaultMessage="Packages"
                description="Breadcrumbs. Packages"
              />
            }
          />
          <Crumb
            position={3}
            label={
              <FormattedMessage
                defaultMessage="Redis"
                description="Breadcrumbs. Redis package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Redis package"
          description="Packages. Redis package title"
        />
      </H1>
    </section>
  );
};

export default PackagesRedis;
