import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter / 2}px;
`;

const ContentArea: React.FC<any> = props => <Container {...props} />;

export default ContentArea;
