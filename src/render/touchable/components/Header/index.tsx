import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from 'mdi-react/MenuIcon';

import AppDrawer from '~/render/touchable/components/AppDrawer';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.color.background.secondary};
  z-index: ${props => props.theme.zIndex.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadows[0]};
`;

const HeaderToolbar = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
`;

const MenuButton = styled.button`
  padding: 1em;
  width: auto;
  height: auto;
  outline: none;
  border: 0;
  background: none;
  color: inherit;
  text-decoration: none;
  color: ${props => props.theme.color.text.primary};
`;

const CenterSide = styled.div`
  flex: 1;
`;

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleToggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderToolbar>
          <MenuButton onClick={handleToggleMenu}>
            <MenuIcon size="1em" color="currentColor" />
          </MenuButton>
        </HeaderToolbar>
        <CenterSide />
      </HeaderContainer>
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Header;
