import React from 'react';
import { Light as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import typescriptLng from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import shellLng from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import { useSelector } from 'react-redux';

import lightSyntaxTheme from './lightSyntaxTheme';
import darkSyntaxTheme from './darkSyntaxTheme';

ReactSyntaxHighlighter.registerLanguage('typescript', typescriptLng);
ReactSyntaxHighlighter.registerLanguage('bash', shellLng);
ReactSyntaxHighlighter.registerLanguage('shell', shellLng);

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
