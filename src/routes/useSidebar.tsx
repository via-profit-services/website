import * as React from 'react';
import { useIntl } from 'react-intl';

import { SidebarMap } from '~/render/desktop/components/Sidebar';

const useSidebar = () => {
  const intl = useIntl();
  const sidebarMap: SidebarMap = React.useMemo(
    () => ({
      sections: [
        {
          path: '/docs/core',
          label: intl.formatMessage({
            defaultMessage: 'Core',
            description: 'Docs sidebar. Core',
          }),
          child: [
            {
              path: '/docs/core/v2.0.x',
              label: intl.formatMessage({
                defaultMessage: 'Core v2.0',
                description: 'Docs sidebar. Core v.2.0',
              }),
              child: [
                {
                  path: '/docs/core/v2.0.x',
                  label: intl.formatMessage({
                    defaultMessage: 'Introduction',
                    description: 'Docs sidebar. Core v.2.0 introduction',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/setup',
                  label: intl.formatMessage({
                    defaultMessage: 'Setup guide',
                    description: 'Docs sidebar. Core v.2.0 setup',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/api',
                  label: intl.formatMessage({
                    defaultMessage: 'API Reference',
                    description: 'Docs sidebar. Core v.2.0 API',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/middlewares',
                  label: intl.formatMessage({
                    defaultMessage: 'Use middlewares',
                    description: 'Docs sidebar. Core v.2.0 middlewares',
                  }),
                },
              ],
            },
          ],
        },
        {
          path: '/docs/knex',
          label: intl.formatMessage({
            defaultMessage: 'Knex',
            description: 'Docs sidebar. Knex',
          }),
          child: [
            {
              path: '/docs/knex/v1.1.x',
              label: intl.formatMessage({
                defaultMessage: 'Knex v1.1',
                description: 'Docs sidebar. Knex v.1.1 introduction',
              }),
              child: [
                {
                  path: '/docs/knex/v1.1.x/api',
                  label: intl.formatMessage({
                    defaultMessage: 'API Reference',
                    description: 'Docs sidebar. Knex v.1.1 API',
                  }),
                },
              ],
            },
          ],
        },
      ],
    }),
    [intl],
  );

  return sidebarMap;
};

export default useSidebar;
