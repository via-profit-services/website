import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import Breadcrumbs, { Crumb } from '~/render/desktop/components/Breadcrumbs';
import H1 from '~/render/desktop/components/Typography/H1';

const PackagesKnex: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Knex package',
            description: 'Meta title of Knex package',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Knex package',
            description: 'Meta description of knex package',
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
                defaultMessage="Knex"
                description="Breadcrumbs. Knex package"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage
          defaultMessage="Knex package"
          description="Packages. Knex package title"
        />
      </H1>
    </section>
  );
};

export default PackagesKnex;
