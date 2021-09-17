import styled from 'styled-components';

import Paragraph from './Paragraph';

const SectionDescription = styled(Paragraph)`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export default SectionDescription;
