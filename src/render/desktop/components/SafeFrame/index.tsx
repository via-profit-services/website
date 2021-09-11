import styled from 'styled-components';

export const SafeFrame = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

export const SafeFrameSection = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

export default SafeFrame;
