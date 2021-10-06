import React from 'react';
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

export const styles = {
  light: lightSyntaxTheme,
  dark: darkSyntaxTheme,
};

const SyntaxHighlighter: React.FC<Props> = props => {
  const { children, language } = props;
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );

  return (
    <ReactSyntaxHighlighter
      language={language}
      style={styles?.[theme] || styles.light}>
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
