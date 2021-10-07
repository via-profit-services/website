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
                  path: '/docs/core/v2.0.x/introduction',
                  label: intl.formatMessage({
                    defaultMessage: 'Introduction',
                    description: 'Docs sidebar. Core v.2.0 introduction',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/getting-started',
                  label: intl.formatMessage({
                    defaultMessage: 'Getting started',
                    description: 'Docs sidebar. Core v.2.0 getting started',
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
                {
                  path: '/docs/core/v2.0.x/connections',
                  label: intl.formatMessage({
                    defaultMessage: 'Connections and pagination',
                    description: 'Docs sidebar. Core v.2.0 connections',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/context',
                  label: intl.formatMessage({
                    defaultMessage: 'Context',
                    description: 'Docs sidebar. Core v.2.0 context',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/typedefs',
                  label: intl.formatMessage({
                    defaultMessage: 'Type definitions and scalars',
                    description: 'Docs sidebar. Core v.2.0 type defs',
                  }),
                },
                {
                  path: '/docs/core/v2.0.x/examples',
                  label: intl.formatMessage({
                    defaultMessage: 'Examples',
                    description: 'Docs sidebar. Core v.2.0 examples',
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
