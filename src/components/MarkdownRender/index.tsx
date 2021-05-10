import React, { useContext } from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UIContext } from '~/context/ui';


const MarkdownRender: React.FC<ReactMarkdownOptions> = (props) => {
  const { children, components, ...otherProps } = props;
  const { state } = useContext(UIContext);
  const { theme } = state;
  // const style = theme === 'light' ? atomOneLight : atomOneDark;
  const style = materialDark;

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
          const language = String(className || '')
            .replace(/^language-/, '')
            .replace(/^ts$/, 'typescript');

          if (inline) {
            return <code className="inline-code">{children}</code>
          }

          return (
            <SyntaxHighlighter
              showLineNumbers
              language={language}
              style={style}
            >
              {children}
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
