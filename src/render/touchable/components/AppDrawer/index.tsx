import * as React from 'react';
import styled from 'styled-components';
import SwipableViews from 'react-swipeable-views';
import HomeIcon from 'mdi-react/HomeOutlineIcon';
import AboutIcon from 'mdi-react/BlurIcon';

import DrawerItem from './DrawerItem';

export type AppDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const DrawerContainer = styled.div<{ $visibility: boolean }>`
  position: fixed;
  z-index: ${props => props.theme.zIndex.mobileMenu};
  visibility: ${props => (props.$visibility ? 'visible' : 'hidden')};
  top: 0;
  height: 100vh;
  width: 100%;
  transition: all 240ms ease-out;
  background-color: ${props =>
    props.$visibility ? 'rgba(0, 0, 0, 0.68)' : 'transparent'};
`;

const DrawerInner = styled.div`
  background-color: ${props => props.theme.color.background.secondary};
  height: 100vh;
  width: 80%;
  display: flex;
  flex-flow: column;
`;

const DrawerNav = styled.nav`
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
`;

const DrawerFallback = styled.div`
  height: 100%;
  width: 100%;
`;

const DrawerHeader = styled.div`
  background-color: ${props => props.theme.color.accent.primary};
  background-position: center center;
  background-size: cover;
  height: 160px;
`;

const AppDrawer: React.FC<AppDrawerProps> = props => {
  const { open, onClose } = props;
  const [visibility, setVisibility] = React.useState(open);
  const [activeIndex, setActiveIndex] = React.useState(open ? 0 : 1);

  React.useEffect(() => {
    setVisibility(open);
    setActiveIndex(open ? 0 : 1);
    window.document.body.style.overflow = open ? 'hidden' : 'visible';
  }, [open]);

  return (
    <DrawerContainer $visibility={visibility}>
      <SwipableViews
        index={activeIndex}
        onChangeIndex={index => setActiveIndex(index)}
        onTransitionEnd={() => {
          if (activeIndex === 1) {
            onClose();
          }
        }}>
        <DrawerInner>
          <DrawerHeader />

          <DrawerNav>
            <DrawerItem
              to="/"
              icon={<HomeIcon size="1em" color="currentColor" />}
              label="Home"
              onDrawerClose={onClose}
            />
            <DrawerItem
              to="/docs"
              icon={<AboutIcon size="1em" color="currentColor" />}
              label="Docs"
              onDrawerClose={onClose}
            />
          </DrawerNav>
        </DrawerInner>
        <DrawerFallback />
      </SwipableViews>
    </DrawerContainer>
  );
};

export default AppDrawer;
