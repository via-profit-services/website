import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import H1 from '~/components/desktop/Typography/H1';

const PackagesSettingsManager: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Settings Manager package',
            description: 'Meta title of Settings Manager package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Settings Manager package',
            description: 'Meta description of Settings Manager package',
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
                defaultMessage="Settings Manager"
                description="Breadcrumbs. Settings Manager package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Settings Manager package"
          description="Packages. Settings Manager package title"
        />
      </H1>
    </section>
  );
};

export default PackagesSettingsManager;
