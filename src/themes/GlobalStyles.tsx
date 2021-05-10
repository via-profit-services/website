import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: Raleway, Arial, Helvetica, sans-serif, serif;
    font-size: ${props => props.theme.fontSize}px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${props => props.theme.color.text.primary};
    background-color: ${props => props.theme.color.background.main};
    word-wrap: break-word;
    height: 100%;
  }
  * {
    box-sizing: border-box;

  }
  :focus {
    outline: none;
  }
  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  a {
    color: ${props => props.theme.color.link.primary};
    font-weight: bold;
  }
  a:visited {
    color: ${props => props.theme.color.link.visited};
  }
  code.inline-code {
    padding: 0.02em 0.7em;
    background: rgb(32 32 32 / 54%);
    font-size: 0.8em;
    border-radius: 8px;
  }
`;
