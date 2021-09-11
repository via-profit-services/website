import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: Raleway, Arial, Helvetica, sans-serif, serif;
    font-size: ${props => props.theme.fontSize}px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${props => props.theme.color.text.primary};
    background-color: ${props => props.theme.color.background.default};
    overflow-wrap: break-word;
    height: 100%;
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
  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
