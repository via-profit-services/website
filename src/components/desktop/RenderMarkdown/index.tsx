import React from 'react';
import ReactMarkdown, { Options as ReactMarkdownOptions } from 'react-markdown';
import { raw } from 'hast-util-raw';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';

import H1 from '~/components/both/Typography/H1';
import H2 from '~/components/both/Typography/H2';
import H3 from '~/components/both/Typography/H3';
import H4 from '~/components/both/Typography/H4';
import H5 from '~/components/both/Typography/H5';
import Strong from '~/components/both/Typography/Strong';
import Em from '~/components/both/Typography/Em';
import Paragraph from '~/components/both/Typography/Paragraph';
import { Ul, Ol } from '~/components/both/Typography/List';
import Blockquote from '~/components/both/Typography/Blockquote';
import SyntaxHighlighter from '~/components/desktop/SyntaxHighlighter';

const Img = styled.img`
  max-width: 100%;
`;

const Anchor = styled.a``;

const ExternalLink = styled.a``;

const ExternalLinkIcon = styled(OpenInNewIcon)`
  color: currentColor;
  font-size: 0.9em;
  margin-left: 0.1em;
`;

const MarkdownEm = styled(Em)`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const CodeInline = styled.code`
  background: ${({ theme }) => theme.color.grey[200]};
  color: ${({ theme }) => theme.color.accent.secondary};
  padding: 0em 0.4em;
  border-radius: 4px;
`;

const relativeToAbsolute = (base: string, rel: string): string => {
  const resultArray = base.split('/');

  if (!base.match(/\/$/)) {
    resultArray.pop();
  }

  rel.split('/').forEach(item => {
    if (item === '..') {
      resultArray.pop();

      return;
    }
    if (item === '.') {
      return;
    }

    resultArray.push(item);
  });

  return resultArray.join('/');
};

const titleToAnchor = (headername: string | React.ReactNode): string => {
  const anchorName = String(headername)
    .toLowerCase()
    .replace(/[\s,/]/g, '-')
    .replace(/[^0-9a-z-]/gi, '');

  return anchorName;
};

const MarkdownRender: React.FC<ReactMarkdownOptions> = props => {
  const { children, components, ...otherProps } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <ReactMarkdown
      rehypePlugins={[
        options => (tree, file) => raw(tree, file as any, options),
      ]}
      components={{
        h1: p => (
          <H1>
            <Anchor
              aria-hidden="true"
              tabIndex={-1}
              id={titleToAnchor(p.children)}
            />
            {p.children}
          </H1>
        ),
        h2: p => (
          <H2>
            <Anchor
              aria-hidden="true"
              tabIndex={-1}
              id={titleToAnchor(p.children)}
            />
            {p.children}
          </H2>
        ),
        h3: p => (
          <H3>
            <Anchor
              aria-hidden="true"
              tabIndex={-1}
              id={titleToAnchor(p.children)}
            />
            {p.children}
          </H3>
        ),
        h4: p => (
          <H4>
            <Anchor
              aria-hidden="true"
              tabIndex={-1}
              id={titleToAnchor(p.children)}
            />
            {p.children}
          </H4>
        ),
        h5: p => (
          <H5>
            <Anchor
              aria-hidden="true"
              tabIndex={-1}
              id={titleToAnchor(p.children)}
            />
            {p.children}
          </H5>
        ),

        img: Img,
        blockquote: Blockquote,
        b: Strong,
        em: MarkdownEm,
        p: Paragraph,
        ul: Ul,
        ol: Ol,
        a: ({ href, title, children }) => {
          if (href.match(/^(http|https):\/\//)) {
            return (
              <ExternalLink
                target="_blank"
                rel="noopener noreferrer"
                title={typeof title === 'string' ? title : undefined}
                href={href}>
                {children}
                {!href.match(/^https:\/\/codesandbox\.io\/s\//) && (
                  <ExternalLinkIcon size="0.8em" />
                )}
              </ExternalLink>
            );
          }

          if (href.match(/\.md(#[a-z0-9-]+){0,1}$/i)) {
            const url = relativeToAbsolute(pathname, href.replace(/\.md/, ''));

            return (
              <Link to={url} title={title}>
                {children}
              </Link>
            );
          }

          if (href.match(/#[a-z0-9-]+$/i)) {
            const anchorName = href.match(/#([a-z0-9-]+)$/)?.[1] || '';

            return (
              <a
                onClick={event => {
                  event.preventDefault();
                  const element = document.querySelector(
                    `a[id="${anchorName}"]`,
                  );

                  if (element) {
                    const yOffset = -61; // app header height
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    navigate(`${pathname}#${anchorName}`);
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
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
              <CodeInline>{String(children).replace(/\n$/, '')}</CodeInline>
            );
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
