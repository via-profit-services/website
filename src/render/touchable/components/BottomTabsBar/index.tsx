import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from 'mdi-react/HomeOutlineIcon';
import DocsIcon from 'mdi-react/InfoOutlineIcon';
import PackagesIcon from 'mdi-react/FormatListTextIcon';
import ExamplesIcon from 'mdi-react/GamepadCircleIcon';
import { useIntl } from 'react-intl';

const Nav = styled.nav`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.header};
  top: calc(100vh - 5rem);
  bottom: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.black.primary};
  color: ${({ theme }) => theme.color.text.inverse};
  box-shadow: ${({ theme }) => theme.shadows[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkElem = styled(Link)`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.text.inverse};
  &:hover {
    color: currentColor;
  }
  &:visited {
    color: currentColor;
  }
`;

const BottomTabBar: React.FC = () => {
  const intl = useIntl();
  const iconSize = '1.8em';

  return (
    <Nav>
      <LinkElem
        to="/"
        aria-label={intl.formatMessage({
          defaultMessage: 'Via Profit company logo',
          description: 'Bottom tab bar. «aria-label» attribute of «Home» link',
        })}>
        <HomeIcon size={iconSize} color="currentColor" />
      </LinkElem>
      <LinkElem
        to="/docs"
        aria-label={intl.formatMessage({
          defaultMessage: 'Via Profit company logo',
          description: 'Bottom tab bar. «aria-label» attribute of «Docs» link',
        })}>
        <DocsIcon size={iconSize} color="currentColor" />
      </LinkElem>
      <LinkElem
        to="/packages"
        aria-label={intl.formatMessage({
          defaultMessage: 'Via Profit company logo',
          description:
            'Bottom tab bar. «aria-label» attribute of «Packages» link',
        })}>
        <PackagesIcon size={iconSize} color="currentColor" />
      </LinkElem>
      <LinkElem
        to="/examples"
        aria-label={intl.formatMessage({
          defaultMessage: 'Via Profit company logo',
          description:
            'Bottom tab bar. «aria-label» attribute of «Examples» link',
        })}>
        <ExamplesIcon size={iconSize} color="currentColor" />
      </LinkElem>
    </Nav>
  );
};

export default BottomTabBar;
