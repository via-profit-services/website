import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import CloseIcon from 'mdi-react/CloseIcon';

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
  font-size: 1.1rem;
  font-weight: 800;
  padding: 1em;
`;

const Header = styled.header`
  box-shadow: ${props => props.theme.shadows[0]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  outline: none;
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 3.5em;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.text.primary};
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
`;

const List = styled.div`
  padding-left: 1em;
`;

const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Sidebar: React.FC<SidebarProps> = props => {
  const { sidebarMap, onDrawerClose } = props;
  const intl = useIntl();

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
    <Container>
      <Header>
        <Title>
          <FormattedMessage
            defaultMessage="Navigation"
            description="Docs sidebar title"
          />
        </Title>
        <CloseButton
          type="button"
          onClick={() => onDrawerClose()}
          aria-label={intl.formatMessage({
            defaultMessage: 'Close docs menu',
            description: 'Docs menu. «aria-label» attribute',
          })}>
          <CloseIcon size="1em" color="currentColor" />
        </CloseButton>
      </Header>
      <ListWrapper>{sidebarMap.sections.map(renderChild)}</ListWrapper>
    </Container>
  );
};

export default Sidebar;
