import * as React from 'react';
import styled from 'styled-components';

import AppBarItem from './AppBarItem';
import ThemeButton from './ThemeButton';

const AppBarContainer = styled.div`
  position: sticky;
  top: 0;
  background: ${props => props.theme.color.background.card};
  z-index: ${props => props.theme.zIndex.appBar};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppBarInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
`;

const AppBarPagesbar = styled.div`
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
