import * as React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import ListElementLink from './ListElementLink';
import ListElementCollapsable from './ListElementCollapsable';

export type SidebarElement = {
  path: string;
  label: React.ReactNode;
  child?: SidebarElement[];
};

export type SidebarMap = Record<'sections', SidebarElement[]>;

export type SidebarProps = {
  sidebarMap: SidebarMap;
  onDrawerClose: () => void;
};

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;

const Nav = styled.nav`
  overflow-y: auto;
  position: sticky;
  top: 70px;
  overflow-y: auto;
  max-height: calc(100vh - 54px);
`;

const List = styled.div<{ $noPadding?: boolean }>`
  margin: 0;
  padding: 0 0 0 1em;
  ${props =>
    props.$noPadding &&
    css`
      padding: 0;
    `}
`;

const Sidebar: React.FC<SidebarProps> = props => {
  const { sidebarMap, onDrawerClose } = props;

  const renderChild = (child: SidebarElement, index: number) => {
    if (child?.child) {
      return (
        <ListElementCollapsable
          key={index.toString()}
          label={child.label}
          path={child.path}>
          <List>{child.child.map(renderChild)}</List>
        </ListElementCollapsable>
      );
    }

    return (
      <ListElementLink
        key={index.toString()}
        path={child.path}
        onDrawerClose={onDrawerClose}>
        {child.label}
      </ListElementLink>
    );
  };

  return (
    <Nav>
      <Title>
        <FormattedMessage
          defaultMessage="Navigation"
          description="Docs sidebar title"
        />
      </Title>
      <List $noPadding>{sidebarMap.sections.map(renderChild)}</List>
    </Nav>
  );
};

export default Sidebar;
