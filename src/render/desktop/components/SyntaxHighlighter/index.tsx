import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { useSelector } from 'react-redux';

import lightSyntaxTheme from './lightSyntaxTheme';
import darkSyntaxTheme from './darkSyntaxTheme';

type Props = {
  language: string;
  children: React.ReactNode | React.ReactNode[];
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
    <Prism language={language} style={styles[theme]}>
      {children}
    </Prism>
  );
};

export default SyntaxHighlighter;
