import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';
import H1 from '~/render/desktop/components/Typography/H1';

const PackagesSubscriptions: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Subscriptions package',
            description: 'Meta title of Subscriptions package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Subscriptions package',
            description: 'Meta description of Subscriptions package',
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
                defaultMessage="Subscriptions"
                description="Breadcrumbs. Subscriptions package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Subscriptions package"
          description="Packages. Subscriptions package title"
        />
      </H1>
    </section>
  );
};

export default PackagesSubscriptions;
