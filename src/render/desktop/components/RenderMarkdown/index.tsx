import React from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import H1 from '~/render/desktop/components/Typography/H1';
import H2 from '~/render/desktop/components/Typography/H2';
import H3 from '~/render/desktop/components/Typography/H3';
import H4 from '~/render/desktop/components/Typography/H4';
import H5 from '~/render/desktop/components/Typography/H5';
import Strong from '~/render/desktop/components/Typography/Strong';
import Em from '~/render/desktop/components/Typography/Em';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';
import SyntaxHighlighter, {
  styles,
} from '~/render/desktop/components/SyntaxHighlighter';

const CodeSSR = styled.code<{ $styles: Record<string, any> }>`
  margin: 0.5em 0px;
  padding: 1.25em 1em;
  box-shadow: rgb(234 232 232) 0px 0px 0px 1px;
  border-radius: 8px;
  display: block;
`;

const MarkdownRender: React.FC<ReactMarkdownOptions> = props => {
  const { children, components, ...otherProps } = props;
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );

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
            return <CodeSSR $styles={styles[theme]}>{children}</CodeSSR>;
          }

          return (
            <SyntaxHighlighter language={language}>
              {String(children)}
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
