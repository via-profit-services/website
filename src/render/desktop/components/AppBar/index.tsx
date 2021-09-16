import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import StickyNode from 'react-stickynode';

import ThemeButton from './ThemeButton';
import GitHubButton from './GitHubButton';
import Logo from '~/render/desktop/components/Logo/LogoInline';

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const NavLink = styled(Link)`
  display: inline-flex;
  padding: 1rem 0.8rem;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.color.text.inverse};
  transition: color 200ms ease-in;
`;

const LogoLink = styled(Link)`
  display: inline-flex;
`;

const StyledLogo = styled(Logo)`
  color: ${props => props.theme.color.text.inverse};
  height: 1.5rem;
  transition: color 200ms ease-in;
`;

const Container = styled.header<{ $isFixed: boolean }>`
  position: absolute;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  transition: box-shadow 200ms ease-out, background-color 200ms ease-out;
  ${props =>
    props.$isFixed &&
    css`
      transition: box-shadow 120ms ease-in, background-color 120ms ease-in;
      background-color: ${({ theme }) => theme.color.background.secondary};
      box-shadow: ${({ theme }) => theme.shadows[0]};

      ${NavLink} {
        color: ${({ theme }) => theme.color.text.primary};
        transition: color 120ms ease-out;
        &:hover {
          color: ${({ theme }) => theme.color.accent.primary};
        }
      }

      ${StyledLogo} {
        color: ${({ theme }) => theme.color.text.primary};
        transition: color 120ms ease-out;
      }
    `}
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
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

const AppBar: React.FC = () => {
  const [isFixed, setIsFixed] = React.useState(false);

  return (
    <Wrapper>
      <StickyNode
        onStateChange={({ status }) =>
          setIsFixed(StickyNode.STATUS_FIXED === status)
        }>
        <Container $isFixed={isFixed}>
          <Inner>
            <LogoLink to="/">
              <StyledLogo />
            </LogoLink>
            <Navbar>
              <NavLink to="/">
                <FormattedMessage
                  defaultMessage="Home"
                  description="Appbar. Home link"
                />
              </NavLink>
              <NavLink to="/docs">
                <FormattedMessage
                  defaultMessage="Docs"
                  description="Appbar. Documentation link"
                />
              </NavLink>
              <NavLink to="/packages">
                <FormattedMessage
                  defaultMessage="Packages"
                  description="Appbar. Packages link"
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

export default AppBar;
