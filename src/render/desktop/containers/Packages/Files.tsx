import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';
import H1 from '~/render/desktop/components/Typography/H1';

const PackagesFileStorage: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'File Storage package',
            description: 'Meta title of File Storage package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'File Storage package',
            description: 'Meta description of File Storage package',
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
                defaultMessage="File Storage"
                description="Breadcrumbs. File Storage package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="File Storage package"
          description="Packages. File Storage package title"
        />
      </H1>
    </section>
  );
};

export default PackagesFileStorage;
