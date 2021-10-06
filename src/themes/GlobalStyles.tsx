import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body, html {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: system-ui;
    font-size: ${props => props.theme.fontSize}px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${props => props.theme.color.text.primary};
    background-color: ${props => props.theme.color.background.primary};
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
    color: ${props => props.theme.color.grey[300]};
  }
  ::selection {
    background: ${props => props.theme.color.accent.primary};
    color: ${props => props.theme.color.text.inverse};
  }
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

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
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
