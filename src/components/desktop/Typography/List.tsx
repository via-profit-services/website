import styled from 'styled-components';

export const Ul = styled.ul`
  font-size: 1em;
  padding-left: 1em;
  & > li::marker {
    color: ${({ theme }) => theme.color.accent.secondary};
  }
`;

export const Ol = styled.ol`
  font-size: 1em;
  padding-left: 1em;
  & > li::marker {
    color: ${({ theme }) => theme.color.accent.secondary};
  }
`;

export const Li = styled.li`
  font-size: 1em;
`;

export default Ul;
