import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
    font-weight: 400;
    font-family: system-ui;
    font-size: ${props => props.theme.fontSize}px;
  }
  body {
    margin: 0;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${props => props.theme.color.text.primary};
    background-color: ${props => props.theme.color.background.primary};
    overflow-wrap: break-word;
    height: 100%;
  }
  @media all and (max-width: 380px) {
    html {
      font-size: ${props => props.theme.fontSize - 4}px;
    }
  }
  * {
    box-sizing: border-box;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${props => props.theme.color.grey[300]};
  }
  ::selection {
    background: ${props => props.theme.color.accent.primary};
    color: ${props => props.theme.color.text.inverse};
  }

  details {
    border-radius: 4px;
    padding: .5em .5em 0;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
  }

  details[open] {
    padding: .5em;
  }

  details[open] summary {
    margin-bottom: .5em;
  }

  

  @media screen and (min-width: 600px) {
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-corner {
      background: none;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: ${props => props.theme.color.scrollbar.track};
    }
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.color.scrollbar.thumb};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.color.scrollbar.hover};
    }
    * {
      scrollbar-color: ${props => props.theme.color.scrollbar.thumb} ${props =>
  props.theme.color.scrollbar.track};
    }
  }

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  li {
    margin: 0.2em 0;
  }

  a {
    color: ${props => props.theme.color.link.primary};
    &:hover {
      color: ${props => props.theme.color.link.hover};
    }
    &:visited {
      color: ${props => props.theme.color.link.visited};
    }
  }
`;
