import styled from 'styled-components';

const Blockquote = styled.blockquote`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  position: relative;
  border-left: 4px solid ${({ theme }) => theme.color.text.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
  margin: 0;
  padding: 1em 0 1em 2em;
  & > p:first-child {
    margin-top: 0;
  }
  & > p:last-child {
    margin-bottom: 0;
  }
`;

export default Blockquote;
