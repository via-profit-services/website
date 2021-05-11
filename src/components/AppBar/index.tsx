import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import buildUrl from '~/utils/buildUrl';
import { UIContext } from '~/context/ui';
import ThemeButton from './ThemeButton';
import Logo from '~/components/Logo';
import { GITHUB_URL, VIAPROFIT_URL } from '~/utils/constants';


const TopbarWrapper = styled.div`
  background: #541b76;
`;

const Topbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  background: #541b76;
`;


const LogoLink = styled(Link)`
  width: 100px;
  height: 24px;
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
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const Toolbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
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

const TopbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.theme.grid.gutter / 4}px 0;
  color: ${props => props.theme.color.appBar.color};
  font-weight: 100;
  font-size: 0.8em;
`;

const TopBarLink = styled.a<{ margin?: boolean }>`
  color: inherit;
  font-weight: inherit;
  font-size:inherit;
  text-decoration-color: #9980f0;
  ${props => props.margin && css`
    margin-left: ${props => props.theme.grid.gutter / 4}px;
  `}
  &:visited {
    color: inherit;
  }
`;


const Item = styled(Link)`
  font-weight: 200;
  padding: 18px 12px;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

const Flex = styled.div`
  flex: 1;
`;

const scope = 'components.AppBar';

const AppBar: React.FC = () => {
  const { state } = useContext(UIContext);
  const { locale } = state;


  return (
    <>
      <TopbarWrapper>
        <Topbar>
          <TopbarContent>
            <Flex>
              <FormattedMessage
                id={`${scope}title`}
                defaultMessage="@via-profit-services"
              />
            </Flex>
            <TopBarLink
              href={VIAPROFIT_URL}
              target="_blank"
            >
              <FormattedMessage
                id={`${scope}.companyWebsiteLabel`}
                defaultMessage="Company website"
              />
            </TopBarLink>
              
            <TopBarLink
              margin
              href={GITHUB_URL}
              target="_blank"
            >
              <FormattedMessage
                id={`${scope}.githubLabel`}
                defaultMessage="Github"
              />
            </TopBarLink>
          </TopbarContent>
        </Topbar>
      </TopbarWrapper>
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

          <Flex />

          <IconsBar>
            <ThemeButton />
          </IconsBar>
        </Toolbar>
      </Menu>
    </>
  )
}

export default AppBar;