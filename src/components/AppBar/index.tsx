import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import buildUrl from '~/utils/buildUrl';
import { UIContext } from '~/context/ui';
import ThemeButton from './ThemeButton';
import GithubButton from './GithubButton';
import WebsiteButton from './WebsiteButton';
import Logo from '~/components/Logo';


const Topbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
`;

const LogoLink = styled(Link)`
  width: 200px;
  height: 120px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.color.appBar.background};
  color: ${props => props.theme.color.appBar.color};
  z-index: ${props => props.theme.zIndex.appBar};
  position: sticky;
  top: 0;
  border-bottom: 1px solid #9300dc70;
`;

const Toolbar = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  padding-left: 0;
`;

const IconsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > a {
    margin-left: 10px;
  }
`;


const Item = styled(Link)`
  display: inline-flex;
  font-weight: 100;
  padding: 24px 12px;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

const scope = 'components.AppBar';

const AppBar: React.FC = () => {
  const { state, dispatch } = useContext(UIContext);
  const history = useHistory();
  const { locale } = state;


  return (
    <>
      <Topbar>
        <LogoLink to={buildUrl(locale, '/')}>
          <Logo variant="inline" />
        </LogoLink>
      </Topbar>
      <Menu>
        <Toolbar>
          <Item to={buildUrl(locale, '/')}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="Via Profit Services"
            />
          </Item>
          <Item to={buildUrl(locale, '/docs')}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="Docs"
            />
          </Item>
          <Item to={buildUrl(locale, '/examples')}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="Examples"
            />
          </Item>
          <Item to={buildUrl(locale, '/About')}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="About"
            />
          </Item>

          <div style={{ flex: 1 }} />

          <IconsBar>
            <WebsiteButton />
            <GithubButton />
            <ThemeButton />
          </IconsBar>
        </Toolbar>
      </Menu>
    </>
  )
}

export default AppBar;