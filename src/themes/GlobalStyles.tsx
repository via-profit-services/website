import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: Raleway, Arial, Helvetica, sans-serif, serif;
    font-size: ${props => props.theme.fontSize}px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${props => props.theme.color.text.primary};
  }
  * {
    box-sizing: border-box;

  }
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${props => props.theme.color.primary.gray};
  }
  ::selection {
    background: ${props => props.theme.color.primary.black};
    color: ${props => props.theme.color.primary.white};
  }
`;
