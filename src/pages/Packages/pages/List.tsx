import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

import H1 from '~/components/desktop/Typography/H1';
import Paragraph from '~/components/desktop/Typography/Paragraph';
import Breadcrumbs, { Crumb } from '~/components/desktop/Breadcrumbs';

const List: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Packages',
            description: 'Meta title of packages page',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Packages list',
            description: 'Meta description of packages page',
          })}
        />
      </Helmet>
      <nav>
        <Breadcrumbs>
          <Crumb home />
          <Crumb
            position={2}
            label={
              <FormattedMessage
                defaultMessage="Packages"
                description="Breadcrumbs. Packages"
              />
            }
          />
        </Breadcrumbs>
      </nav>
      <H1>
        <FormattedMessage defaultMessage="List of all packages" />
      </H1>

      {[...new Array(15).keys()].map(key => (
        <Paragraph key={key.toString()}>
          Lorem ipsum consequat deserunt sint dolor nostrud enim incididunt
          cupidatat reprehenderit nisi fugiat veniam adipisicing ex consectetur.
        </Paragraph>
      ))}
    </section>
  );
};

export default List;
