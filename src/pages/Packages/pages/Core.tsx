import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';
import H1 from '~/components/desktop/Typography/H1';

const PackagesCore: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Core package',
            description: 'Meta title of Core package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Core package',
            description: 'Meta description of core package',
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
                defaultMessage="Core"
                description="Breadcrumbs. Core package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Core package"
          description="Packages. Core package title"
        />
      </H1>
    </section>
  );
};

export default PackagesCore;
