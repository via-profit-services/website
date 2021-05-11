import { createGlobalStyle } from 'styled-components';
import SFUITextRegular from '~/../assets/fonts/SFUIText/SFUIText-Regular.woff';
import SFUITextLight from '~/../assets/fonts/SFUIText/SFUIText-Light.woff';
import SFUITextSemibold from '~/../assets/fonts/SFUIText/SFUIText-Semibold.woff';
import SFUITextBold from '~/../assets/fonts/SFUIText/SFUIText-Bold.woff';
import SFUITextRegularItalic from '~/../assets/fonts/SFUIText/SFUIText-RegularItalic.woff';
import SFUITextSemiboldItalic from '~/../assets/fonts/SFUIText/SFUIText-SemiboldItalic.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: normal;
    src: local('SF UI Text Regular'), url('${SFUITextRegular}') format('woff');
  }

  @font-face {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 100;
    src: local('SF UI Text Light'), url('${SFUITextLight}') format('woff');
  }

  @font-face {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 200;
    src: local('SF UI Text Semibold'), url('${SFUITextSemibold}') format('woff');
  }

  @font-face {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 300;
    src: local('SF UI Text Bold'), url('${SFUITextBold}') format('woff');
  }

  @font-face {
    font-family: 'SF UI Text';
    font-style: italic;
    font-weight: normal;
    src: local('SF UI Text Italic'), url('${SFUITextRegularItalic}') format('woff');
  }

  @font-face {
    font-family: 'SF UI Text';
    font-style: italic;
    font-weight: 300;
    src: local('SF UI Text Semibold Italic'), url('${SFUITextSemiboldItalic}') format('woff');
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: 'SF UI Text', Arial, Helvetica, sans-serif, serif;
    font-weight: 100;
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
    font-weight: 200;
  }
  a:visited {
    color: ${props => props.theme.color.link.visited};
  }
  code.inline-code {
    padding: 0.02em 0.7em;
    background: rgba(221, 221, 221, 0.54);
    font-size: 0.8em;
    border-radius: 8px;
  }
`;
