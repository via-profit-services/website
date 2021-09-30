import * as React from 'react';
import MenuIcon from 'mdi-react/MenuIcon';
import styled, { css } from 'styled-components';

import AppDrawer from '~/render/touchable/components/AppDrawer';
import ButtonBase from '~/render/touchable/components/ButtonBase';
import GitHubButton from './GitHubButton';
import ThemeButton from './ThemeButton';

type Props = {
  variant?: 'home-page' | 'second-page';
};

type ContainerStyledProps = {
  $isSticky: boolean;
  $variant: NonNullable<Props['variant']>;
};

const HeaderContainer = styled.header<ContainerStyledProps>`
  position: sticky;
  top: -${props => (props.$variant === 'home-page' ? 1 : 0)}px;
  z-index: ${props => props.theme.zIndex.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: opacity 200ms ease-out;
    background: ${props => props.theme.color.gradients[0]};
    opacity: ${props => (props.$variant === 'home-page' ? 0 : 1)};
    ${props =>
      props.$isSticky &&
      css`
        opacity: 1;
      `};
  }
`;

const HeaderToolbar = styled.div`
  width: 100%;
  min-height: 51px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
`;

const MenuButton = styled(ButtonBase)`
  padding: 0;
  font-size: 1rem;
  width: 2.6em;
  height: 2.6em;
  outline: none;
  border: 0;
  border-radius: 100%;
  background: none;
  color: inherit;
  text-decoration: none;
  color: ${props => props.theme.color.text.inverse};
  margin-left: -${props => props.theme.grid.touchable.gutter}px;
`;

const CenterSide = styled.div`
  flex: 1;
`;

const Header: React.FC<Props> = props => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { variant } = props;
  const currentVariant = variant ?? 'second-page';
  const [isSticky, setIsSticky] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const cachedRef = headerRef.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (variant === 'home-page') {
          setIsSticky(e.intersectionRatio < 1);
        }
      },
      {
        threshold: [1],
      },
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, [variant]);

  const handleToggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <HeaderContainer
        ref={headerRef}
        $isSticky={isSticky}
        $variant={currentVariant}>
        <HeaderToolbar>
          <MenuButton onClick={handleToggleMenu}>
            <MenuIcon size="1.5em" color="currentColor" />
          </MenuButton>
          <CenterSide />
          <ThemeButton />
          <GitHubButton />
        </HeaderToolbar>
      </HeaderContainer>
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Header;
