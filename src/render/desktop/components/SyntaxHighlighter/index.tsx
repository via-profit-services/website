import React from 'react';
import styled from 'styled-components';
import { PrismAsyncLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import typescriptLng from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import shellLng from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import graphqlLng from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import { useSelector } from 'react-redux';

import lightSyntaxTheme from './lightSyntaxTheme';
import darkSyntaxTheme from './darkSyntaxTheme';

ReactSyntaxHighlighter.registerLanguage('typescript', typescriptLng);
ReactSyntaxHighlighter.registerLanguage('bash', shellLng);
ReactSyntaxHighlighter.registerLanguage('shell', shellLng);
ReactSyntaxHighlighter.registerLanguage('graphql', graphqlLng);

type Props = {
  language: string;
  children: string;
};

export const syntaxThemes: Record<'light' | 'dark', typeof lightSyntaxTheme> = {
  light: lightSyntaxTheme,
  dark: darkSyntaxTheme,
};

const CodeSSR = styled.code<{ $styles: Record<string, any> }>`
  ${props => props.$styles};
`;

const PreSSR = styled.pre<{ $styles: Record<string, any> }>`
  ${props => props.$styles};
`;

const SyntaxHighlighter: React.FC<Props> = props => {
  const { children, language } = props;
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );

  const styles = React.useMemo(
    () => syntaxThemes?.[theme] || syntaxThemes.light,
    [theme],
  );

  const code = String(children).trim();

  if (typeof window === 'undefined') {
    return (
      <PreSSR $styles={styles['pre[class*="language-"]']}>
        <CodeSSR $styles={styles['code[class*="language-"]']}>{code}</CodeSSR>
      </PreSSR>
    );
  }

  return (
    <ReactSyntaxHighlighter language={language} style={styles}>
      {code}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
