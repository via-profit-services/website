import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import StickyNode from 'react-stickynode';

import ThemeButton from './ThemeButton';
import GitHubButton from './GitHubButton';
import LogoInline from '~/render/desktop/components/Logo/LogoInline';

type Props = {
  variant?: 'home-page' | 'second-page';
};

type ContainerStyledProps = {
  $isFixed: boolean;
  $variant: NonNullable<Props['variant']>;
};

type LinkStyledProps = {
  $isActive?: boolean;
};

const Wrapper = styled.div<ContainerStyledProps>`
  z-index: ${({ theme }) => theme.zIndex.header};
  position: relative;
  ${props =>
    props.$variant === 'second-page' &&
    css`
      height: 54px;
    `};
`;

const NavLink = styled(Link)<LinkStyledProps>`
  display: inline-flex;
  padding: 1rem 0.8rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${props => (props.$isActive ? 800 : 400)};
  transition: color 200ms ease-in;
  color: ${props => props.theme.color.text.inverse};
  &:hover {
    color: currentColor;
  }
  &:visited {
    color: currentColor;
  }
`;

const LogoLink = styled(Link)`
  display: inline-flex;
`;

const Logo = styled(LogoInline)`
  color: ${props => props.theme.color.text.inverse};
  height: 1.5rem;
  transition: color 200ms ease-in;
`;

const Container = styled.header<ContainerStyledProps>`
  position: absolute;
  width: 100%;
  color: ${props => props.theme.color.text.inverse};
  transition: box-shadow 200ms ease-out;
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
  }
  ${props =>
    props.$isFixed &&
    css`
      &:before {
        opacity: 1;
      }
    `}
`;

const Inner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
  margin: 0 auto;
`;

const Navbar = styled.nav`
  margin-left: 2rem;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Toolbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const StyledThemeButton = styled(ThemeButton)`
  margin-left: 1rem;
`;

const Header: React.FC<Props> = props => {
  const { variant } = props;
  const currentVariant = variant ?? 'second-page';
  const [isFixed, setIsFixed] = React.useState(false);
  const { path } = useRouteMatch();

  return (
    <Wrapper $isFixed={isFixed} $variant={currentVariant}>
      <StickyNode
        onStateChange={({ status }) =>
          setIsFixed(StickyNode.STATUS_FIXED === status)
        }>
        <Container $isFixed={isFixed} $variant={currentVariant}>
          <Inner>
            <LogoLink to="/">
              <Logo />
            </LogoLink>
            <Navbar>
              <NavLink to="/" $isActive={path === '/'}>
                <FormattedMessage
                  defaultMessage="Home"
                  description="Appbar. Home link"
                />
              </NavLink>
              <NavLink to="/docs" $isActive={path.match(/^\/docs/) !== null}>
                <FormattedMessage
                  defaultMessage="Docs"
                  description="Appbar. Documentation link"
                />
              </NavLink>
              <NavLink
                to="/packages"
                $isActive={path.match(/^\/packages/) !== null}>
                <FormattedMessage
                  defaultMessage="Packages"
                  description="Appbar. Packages link"
                />
              </NavLink>
              <NavLink
                to="/examples"
                $isActive={path.match(/^\/examples/) !== null}>
                <FormattedMessage
                  defaultMessage="Examples"
                  description="Appbar. Examples link"
                />
              </NavLink>
            </Navbar>
            <Toolbar>
              <GitHubButton />
              <StyledThemeButton />
            </Toolbar>
          </Inner>
        </Container>
      </StickyNode>
    </Wrapper>
  );
};

export default Header;
