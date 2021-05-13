import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  display: flex;
  max-width: ${props => props.theme.grid.safeFrame}px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  width: 1px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
`;

const LeftSidebarWrapper = styled.div`
  width: 240px;
  padding-left: ${props => props.theme.grid.gutter / 2}px;
  border-right: 1px solid #bebebe;
`;

const RightSidebarWrapper = styled.div`
  width: 160px;
  padding-right: ${props => props.theme.grid.gutter / 2}px;
`;


const LeftSidebar = styled.div`
  position: sticky;
  top: 70px;
`;

const RightSidebar = styled.div`
  position: sticky;
  top: 70px;
`;

export type ContentAreaProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  menuBar?: React.ReactNode;
};

const ContentArea: React.FC<ContentAreaProps> = (props) => {
  const { children, sidebar, menuBar } = props;

  return (
    <Container>
      {sidebar && (
        <LeftSidebarWrapper>
          <LeftSidebar>
            {sidebar}
          </LeftSidebar>
        </LeftSidebarWrapper>
      )}
      <ContentWrapper>
        {children}
      </ContentWrapper>
      {menuBar && (
        <RightSidebarWrapper>
          <RightSidebar>{menuBar}</RightSidebar>
        </RightSidebarWrapper>
      )}
    </Container>
  )
}

export default ContentArea;
