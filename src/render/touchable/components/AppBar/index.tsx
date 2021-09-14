import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from 'mdi-react/MenuIcon';

import AppDrawer from '~/render/touchable/components/AppDrawer';

const AppBarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.color.background};
  z-index: ${props => props.theme.zIndex.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBarToolbar = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
`;

const MenuButton = styled.button`
  padding: 12px;
  width: auto;
  height: auto;
  outline: none;
  border: 0;
  background: none;
  color: inherit;
  text-decoration: none;
  color: ${props => props.theme.color.textPrimary};
`;

const CenterSide = styled.div`
  flex: 1;
`;

const AppBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleToggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBarContainer>
        <AppBarToolbar>
          <MenuButton onClick={handleToggleMenu}>
            <MenuIcon size="1em" color="currentColor" />
          </MenuButton>
        </AppBarToolbar>
        <CenterSide />
      </AppBarContainer>
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default AppBar;
