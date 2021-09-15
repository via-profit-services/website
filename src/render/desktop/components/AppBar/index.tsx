import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import AppBarItem from './AppBarItem';
import ThemeButton from './ThemeButton';

const AppBarContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${props => props.theme.color.text.primary};
  z-index: ${props => props.theme.zIndex.header};
  box-shadow: ${props => props.theme.shadows[0]};
`;

const AppBarTop = styled.div`
  padding: 0.5rem 0;
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
        <AppBarItem to="/">
          <FormattedMessage
            defaultMessage="Home"
            description="Appbar. Home link"
          />
        </AppBarItem>
        <AppBarItem to="/docs">
          <FormattedMessage
            defaultMessage="Docs"
            description="Appbar. Documentation link"
          />
        </AppBarItem>
        <AppBarItem to="/packages">
          <FormattedMessage
            defaultMessage="Packages"
            description="Appbar. Packages link"
          />
        </AppBarItem>
      </AppBarPagesbar>
      <AppBarToolbar>
        <ThemeButton />
      </AppBarToolbar>
    </AppBarInner>
  </AppBarContainer>
);

export default AppBar;
