import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import H1 from '~/components/desktop/Typography/H1';

const PackagesPermissions: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Permissions package',
            description: 'Meta title of Permissions package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Permissions package',
            description: 'Meta description of Permissions package',
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
                defaultMessage="Permissions"
                description="Breadcrumbs. Permissions package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Permissions package"
          description="Packages. Permissions package title"
        />
      </H1>
    </section>
  );
};

export default PackagesPermissions;
