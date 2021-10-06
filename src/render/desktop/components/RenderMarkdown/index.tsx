import React from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import H1 from '~/render/desktop/components/Typography/H1';
import H2 from '~/render/desktop/components/Typography/H2';
import H3 from '~/render/desktop/components/Typography/H3';
import H4 from '~/render/desktop/components/Typography/H4';
import H5 from '~/render/desktop/components/Typography/H5';
import Strong from '~/render/desktop/components/Typography/Strong';
import Em from '~/render/desktop/components/Typography/Em';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';
import Blockquote from '~/render/desktop/components/Typography/Blockquote';
import SyntaxHighlighter from '~/render/desktop/components/SyntaxHighlighter';

const Img = styled.img`
  max-width: 100%;
`;

const Anchor = styled.a``;

const relativeToAbsolute = (base: string, rel: string): string => {
  const st = base.split('/');
  const arr = rel.split('/');
  st.pop(); // ignore the current file name (or no string)
  // (ignore if "base" is the current folder without having slash in trail)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.') continue;
    if (arr[i] === '..') st.pop();
    else st.push(arr[i]);
  }

  return st.join('/');
};

const titleToAnchor = (headername: string | React.ReactNode): string => {
  const anchorName = String(headername)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^0-9a-z-]/gi, '');

  return anchorName;
};

const MarkdownRender: React.FC<ReactMarkdownOptions> = props => {
  const { children, components, ...otherProps } = props;
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <ReactMarkdown
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

                    history.push(`${pathname}#${anchorName}`);
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
              <code data-type="inline">
                {String(children).replace(/\n$/, '')}
              </code>
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
