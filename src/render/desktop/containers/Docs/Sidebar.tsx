import * as React from 'react';
import styled from 'styled-components';

import ListElementLink from '~/render/desktop/components/Sidebar/ListElementLink';
import CollapsableListElemen from '~/render/desktop/components/Sidebar/CollapsableListElemen';
import List from '~/render/desktop/components/Sidebar/List';

const Nav = styled.nav`
  overflow-y: auto;
  position: sticky;
  top: 54px;
  overflow-y: auto;
  max-height: calc(100vh - 54px);
`;

const Sidebar: React.FC = () => (
  <Nav>
    <List>
      <CollapsableListElemen label="> Core" path="/docs/core">
        <List>
          <CollapsableListElemen label="> v2.0" path="/docs/core/v2.0.x">
            <List>
              <ListElementLink to="/docs/core/v2.0.x">
                introduction
              </ListElementLink>
              <ListElementLink to="/docs/core/v2.0.x/setup">
                Setup
              </ListElementLink>
              <ListElementLink to="/docs/core/v2.0.x/api">API</ListElementLink>
              <ListElementLink to="/docs/core/v2.0.x/middlewares">
                Middlewares
              </ListElementLink>
            </List>
          </CollapsableListElemen>
        </List>
      </CollapsableListElemen>

      <CollapsableListElemen label="> Knex" path="/docs/knex">
        <List>
          <CollapsableListElemen label="> v1.1" path="/docs/knex/v1.1.x">
            <List>
              <ListElementLink to="/docs/knex/v1.1.x">
                introduction
              </ListElementLink>

              <ListElementLink to="/docs/knex/v1.1.x/api">API</ListElementLink>
            </List>
          </CollapsableListElemen>
        </List>
      </CollapsableListElemen>
    </List>
  </Nav>
);

export default Sidebar;
