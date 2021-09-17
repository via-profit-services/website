import React from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic as syntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import H1 from '~/render/desktop/components/Typography/H1';
import H2 from '~/render/desktop/components/Typography/H2';
import H3 from '~/render/desktop/components/Typography/H3';
import H4 from '~/render/desktop/components/Typography/H4';
import H5 from '~/render/desktop/components/Typography/H5';
import Strong from '~/render/desktop/components/Typography/Strong';
import Em from '~/render/desktop/components/Typography/Em';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';

const background = '#32293e';
const color = '#c3cee3';

/* eslint-disable */
const style = {
  ...syntaxTheme,
  'code[class*="language-"]': {
    ...syntaxTheme['code[class*="language-"]'],
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
  imports: {
    color: '#c792ea',
  },
  'maybe-class-name': {
    color: '#c792ea',
  },
};
/* eslint-enable */

const CodeSSR = styled.code({
  ...style['pre[class*="language-"]'],
  display: 'block',
});

const MarkdownRender: React.FC<ReactMarkdownOptions> = props => {
  const { children, components, ...otherProps } = props;

  return (
    <ReactMarkdown
      components={{
        h1: p => <H1>{p.children}</H1>,
        h2: p => <H2>{p.children}</H2>,
        h3: p => <H3>{p.children}</H3>,
        h4: p => <H4>{p.children}</H4>,
        h5: p => <H5>{p.children}</H5>,
        b: Strong,
        em: Em,
        p: Paragraph,
        a: ({ href, title, children }) => {
          if (href.match(/^(http|https):\/\//)) {
            return (
              <a
                target="__blank"
                rel="noopener noreferrer"
                title={typeof title === 'string' ? title : undefined}
                href={href}>
                {children}
              </a>
            );
          }

          return (
            <Link
              title={typeof title === 'string' ? title : undefined}
              to={href}>
              {children}
            </Link>
          );
        },
        code: ({ className, children, inline }) => {
          const language = String(className || '')
            .replace(/^language-/, '')
            .replace(/^ts$/, 'typescript')
            .replace(/^js$/, 'javascript');

          if (inline) {
            return (
              <code data-type="inline">
                {String(children).replace(/\n$/, '')}
              </code>
            );
          }

          if (typeof window === 'undefined') {
            return <CodeSSR>{children}</CodeSSR>;
          }

          return (
            <SyntaxHighlighter language={language} style={style}>
              {children}
            </SyntaxHighlighter>
          );
        },
        ...components,
      }}
      {...otherProps}>
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
