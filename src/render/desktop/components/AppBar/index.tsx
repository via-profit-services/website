import * as React from 'react';
import styled from 'styled-components';

import AppBarItem from './AppBarItem';
import ThemeButton from './ThemeButton';

const AppBarContainer = styled.header`
  position: sticky;
  top: 10px;
  margin: 0 10px;
  border-radius: 0 0 10px 10px;
  background: ${props => props.theme.color.text.primary};
  z-index: ${props => props.theme.zIndex.header};
  box-shadow: ${props => props.theme.shadows[0]};
`;

const AppBarTop = styled.div`
  padding: 0.5rem 0;
  border-radius: 10px 10px 0 0;
  background: red;
`;

const AppBarInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
`;

const AppBarPagesbar = styled.nav`
  margin: 0 auto;
  flex: 1;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
`;

const AppBarToolbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
`;

const AppBar: React.FC = () => (
  <AppBarContainer>
    <AppBarTop>Lorem ipsum</AppBarTop>
    <AppBarInner>
      <AppBarPagesbar>
        <AppBarItem to="/">Home</AppBarItem>
        <AppBarItem to="/ru">RU Home</AppBarItem>
        <AppBarItem to="/docs">Docs</AppBarItem>
        <AppBarItem to="/ru/docs">RU Docs</AppBarItem>
      </AppBarPagesbar>
      <AppBarToolbar>
        <ThemeButton />
      </AppBarToolbar>
    </AppBarInner>
  </AppBarContainer>
);

export default AppBar;
