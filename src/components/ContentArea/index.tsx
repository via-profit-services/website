import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  display: flex;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  width: 1px;
  padding: 0 15px;
`;

const LeftSidebarWrapper = styled.div`
  width: 240px;
  padding: 0 15px 0 0;
  border-right: 1px solid #bebebe;
`;

const RightSidebarWrapper = styled.div`
  width: 160px;
  padding: 0 0 0 15px;
`;


const LeftSidebar = styled.div`
  position: sticky;
  top: 40px;
`;

const RightSidebar = styled.div`
  position: sticky;
  top: 40px;
`;

export type ContentAreaProps = {
  children: React.ReactNode | React.ReactNode[];
  menuBar?: React.ReactNode | React.ReactNode[];
};

const ContentArea: React.FC<ContentAreaProps> = (props) => {
  const { children, menuBar } = props;

  return (
    <Container>
      <LeftSidebarWrapper>
        <LeftSidebar>
          Left sidebar
        </LeftSidebar>
      </LeftSidebarWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <RightSidebarWrapper>
        <RightSidebar>{menuBar}</RightSidebar>
      </RightSidebarWrapper>
    </Container>
  )
}

export default ContentArea;
