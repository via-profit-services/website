import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

import ThemeButton from './ThemeButton';
import GitHubButton from './GitHubButton';
import LogoInline from '~/components/desktop/Logo/LogoInline';

type Props = {
  variant?: 'home-page' | 'second-page';
};

type ContainerStyledProps = {
  $isSticky: boolean;
  $variant: NonNullable<Props['variant']>;
};

type LinkStyledProps = {
  $isActive?: boolean;
};

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
  z-index: ${({ theme }) => theme.zIndex.header};
  position: sticky;
  min-height: 51px;
  top: -${props => (props.$variant === 'home-page' ? 1 : 0)}px;
  width: 100%;
  color: ${props => props.theme.color.text.inverse};
  transition: box-shadow 200ms ease-out;
  display: flex;
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
  @media (max-width: 560px) {
    display: none;
  }
`;

const Toolbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 680px) {
    display: none;
  }
`;

const StyledThemeButton = styled(ThemeButton)`
  margin-left: 1rem;
`;

const Header: React.FC<Props> = props => {
  const { variant } = props;
  const currentVariant = variant ?? 'second-page';
  const [isSticky, setIsSticky] = React.useState(false);
  const { pathname } = useLocation();
  const intl = useIntl();
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

  return (
    <Container ref={headerRef} $isSticky={isSticky} $variant={currentVariant}>
      <Inner>
        <LogoLink
          to="/"
          aria-label={intl.formatMessage({
            defaultMessage: 'Home page link',
            description: 'Header. «aria-label» attribute of home page link',
          })}>
          <Logo
            aria-label={intl.formatMessage({
              defaultMessage: 'Via Profit company logo',
              description:
                'Header. «aria-label» attribute of Via Profit company logo',
            })}
          />
        </LogoLink>
        <Navbar>
          <NavLink to="/" $isActive={pathname === '/'}>
            <FormattedMessage
              defaultMessage="Home"
              description="Appbar. Home link"
            />
          </NavLink>
          <NavLink to="/docs" $isActive={pathname.match(/^\/docs/) !== null}>
            <FormattedMessage
              defaultMessage="Docs"
              description="Appbar. Documentation link"
            />
          </NavLink>
          <NavLink
            to="/packages"
            $isActive={pathname.match(/^\/packages/) !== null}>
            <FormattedMessage
              defaultMessage="Packages"
              description="Appbar. Packages link"
            />
          </NavLink>
          <NavLink
            to="/examples"
            $isActive={pathname.match(/^\/examples/) !== null}>
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
  );
};

export default Header;
