import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import { useSelector } from 'react-redux';

import lightSyntaxTheme from './lightSyntaxTheme';
import darkSyntaxTheme from './darkSyntaxTheme';

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
