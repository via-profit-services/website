import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { UIContext, useUrlMap } from '~/context/ui';
import ThemeButton from './ThemeButton';
import Logo from '~/components/Logo';
import { GITHUB_URL, VIAPROFIT_URL } from '~/utils/constants';


const TopbarWrapper = styled.div`
  background: #3c1255;
`;

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
  width: 100px;
  height: 24px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #541b76;
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
  font-weight: normal;
  padding: 18px 12px;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;


const Version = styled.div`
  font-weight: normal;
  padding: 0.03em 0.6em;
  text-decoration: none;
  color: inherit;
  background: #d0c3ff;
  color: #3c1255;
  border-radius: 10px;
  margin-left: 12px;
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const scope = 'components.AppBar';

const AppBar: React.FC = () => {
  const { state } = useContext(UIContext);
  const { urlMap } = useUrlMap();
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
              <Version>
                v1.0.0
              </Version>
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
          <LogoLink to={urlMap.home}>
            <Logo variant="inline" primary="#fff" secondary="#d0c3ff" />
          </LogoLink>
          
          <Flex />
          
          <Item to={urlMap.home}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="Home"
            />
          </Item>
          <Item to={urlMap.docs.introduction}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="Docs"
            />
          </Item>
          <Item to={urlMap.examples}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="Examples"
            />
          </Item>
          <Item to={urlMap.about}>
            <FormattedMessage
              id={`${scope}`}
              defaultMessage="About"
            />
          </Item>

          

          <IconsBar>
            <ThemeButton />
          </IconsBar>
        </Toolbar>
      </Menu>
    </>
  )
}

export default AppBar;