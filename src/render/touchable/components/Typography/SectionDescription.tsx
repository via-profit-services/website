import styled from 'styled-components';

import Paragraph from './Paragraph';

const SectionDescription = styled(Paragraph)`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  margin-top: 2.4em;
  margin-bottom: 1em;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export default SectionDescription;
