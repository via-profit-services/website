import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';
import H1 from '~/render/desktop/components/Typography/H1';

const PackagesDataloader: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Dataloader package',
            description: 'Meta title of Dataloader package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Dataloader package',
            description: 'Meta description of Dataloader package',
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
                defaultMessage="Dataloader"
                description="Breadcrumbs. Dataloader package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Dataloader package"
          description="Packages. Dataloader package title"
        />
      </H1>
    </section>
  );
};

export default PackagesDataloader;
