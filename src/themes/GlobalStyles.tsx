import { createGlobalStyle } from 'styled-components';

import OpenSansItalic from '~/../assets/fonts/OpenSans/OpenSans-Italic.woff2';
import OpenSansRegular from '~/../assets/fonts/OpenSans/OpenSans-Regular.woff2';
import OpenSansBoldItalic from '~/../assets/fonts/OpenSans/OpenSans-BoldItalic.woff2';
import OpenSansSemiBold from '~/../assets/fonts/OpenSans/OpenSans-SemiBold.woff2';
import OpenSansExtraBoldItalic from '~/../assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.woff2';
import OpenSansBold from '~/../assets/fonts/OpenSans/OpenSans-Bold.woff2';
import OpenSansLightItalic from '~/../assets/fonts/OpenSans/OpenSans-LightItalic.woff2';
import OpenSansSemiBoldItalic from '~/../assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2';
import OpenSansExtraBold from '~/../assets/fonts/OpenSans/OpenSans-ExtraBold.woff2';
import OpenSansLight from '~/../assets/fonts/OpenSans/OpenSans-Light.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBoldItalic}) format('woff2');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansExtraBoldItalic}) format('woff2');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansLightItalic}) format('woff2');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBold}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBoldItalic}) format('woff2');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    font-weight: 300;
    font-size: ${props => props.theme.fontSize}px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${props => props.theme.color.text.primary};
    background-color: ${props => props.theme.color.background.secondary};
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
    background: ${props => props.theme.color.grey[200]};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.grey[500]};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.color.accent.primary};
  }
  * {
    scrollbar-color: ${props => props.theme.color.grey[500]} ${props =>
  props.theme.color.grey[200]};
  }

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
