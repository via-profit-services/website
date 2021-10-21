import * as React from 'react';
import { useIntl } from 'react-intl';

import { SidebarMap } from '~/components/desktop/Sidebar';

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
              path: '/docs/core/getting-started',
              label: intl.formatMessage({
                defaultMessage: 'Getting started',
                description: 'Docs sidebar. Core v.2.0 getting started',
              }),
            },
            {
              path: '/docs/core/api',
              label: intl.formatMessage({
                defaultMessage: 'API Reference',
                description: 'Docs sidebar. Core v.2.0 API',
              }),
            },
            {
              path: '/docs/core/middlewares',
              label: intl.formatMessage({
                defaultMessage: 'Use middlewares',
                description: 'Docs sidebar. Core v.2.0 middlewares',
              }),
            },
            {
              path: '/docs/core/connections',
              label: intl.formatMessage({
                defaultMessage: 'Connections and pagination',
                description: 'Docs sidebar. Core v.2.0 connections',
              }),
            },
            {
              path: '/docs/core/context',
              label: intl.formatMessage({
                defaultMessage: 'Context',
                description: 'Docs sidebar. Core v.2.0 context',
              }),
            },
            {
              path: '/docs/core/typedefs',
              label: intl.formatMessage({
                defaultMessage: 'Type definitions and scalars',
                description: 'Docs sidebar. Core v.2.0 type defs',
              }),
            },
            {
              path: '/docs/core/examples',
              label: intl.formatMessage({
                defaultMessage: 'Examples',
                description: 'Docs sidebar. Core v.2.0 examples',
              }),
            },
            {
              path: '/docs/core/versions',
              label: intl.formatMessage({
                defaultMessage: 'Versions',
                description: 'Docs sidebar. Core versions',
              }),
              child: [
                {
                  path: '/docs/core/versions/v1.2',
                  label: intl.formatMessage({
                    defaultMessage: 'Core v1.2',
                    description: 'Docs sidebar. Core v.1.2',
                  }),
                  child: [
                    {
                      path: '/docs/core/versions/v1.2',
                      label: intl.formatMessage({
                        defaultMessage: 'Introduction',
                        description: 'Docs sidebar. Core v.1.2',
                      }),
                    },
                  ],
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
              path: '/docs/knex/getting-started',
              label: intl.formatMessage({
                defaultMessage: 'Getting started',
                description: 'Docs sidebar. Knex getting started',
              }),
            },
            {
              path: '/docs/knex/versions',
              label: intl.formatMessage({
                defaultMessage: 'Versions',
                description: 'Docs sidebar. Knex versions',
              }),
              child: [
                {
                  path: '/docs/knex/versions/v1.1',
                  label: intl.formatMessage({
                    defaultMessage: 'Knex v1.1',
                    description: 'Docs sidebar. Knex v.1.1',
                  }),
                  child: [
                    {
                      path: '/docs/knex/versions/v1.1',
                      label: intl.formatMessage({
                        defaultMessage: 'Introduction',
                        description: 'Docs sidebar. Knex v.1.1',
                      }),
                    },
                  ],
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
