import React from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic as syntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const background = '#292d3e';
const color = '#c3cee3';

const style = {
  ...syntaxTheme,
  'code[class*=\"language-\"]': {
    ...syntaxTheme['code[class*=\"language-\"]'],
    background,
    color,
  },
  'pre[class*="language-"]': {
    ...syntaxTheme['pre[class*="language-"]'],
    background,
    color,
    borderRadius: '8px',
  },
  comment: {
    color: '#697098',
  },
  function: {
    color: '#82aaff',
  },
  'class-name': {
    color: '#82aaff',
  },
};

const CodeSSR = styled.code({
  ...style['pre[class*="language-"]'],
  display: 'block',
});

const MarkdownRender: React.FC<ReactMarkdownOptions> = (props) => {
  const { children, components, ...otherProps } = props;

  return (
    <ReactMarkdown
      components={{
        a: ({ href, title, children }) => (
          <Link
            title={typeof title === 'string' ? title : undefined}
            to={href}
          >
            {children}
          </Link>
        ),
        code: ({ className, children , inline}) => {
          const codeString = String(children).replace(/\n$/, '');

          const language = String(className || '')
            .replace(/^language-/, '')
            .replace(/^ts$/, 'typescript');

          if (inline) {
            return <code>{codeString}</code>
          }

          if (typeof window === 'undefined') {
            return <CodeSSR>{codeString}</CodeSSR>
          }

          return (
            <SyntaxHighlighter
              language={language}
              style={style}
            >
              {codeString}
            </SyntaxHighlighter>
          )
        },
        ...components,
      }}
      {...otherProps}
    >
      {children}
    </ReactMarkdown>
  )
}


export default MarkdownRender;
