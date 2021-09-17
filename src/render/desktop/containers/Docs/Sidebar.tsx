import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import Paragraph from '~/render/desktop/components/Typography/Paragraph';

// const ChevronIcon = styled(ChevronRightIcon)`
//   margin-left: 10px;
//   position: relative;
//   transition: transform ease-out 240ms;
// `;

const Nav = styled.nav`
  overflow-y: auto;
  position: sticky;
  top: 54px;
  overflow-y: auto;
  max-height: calc(100vh - 54px);
`;

const List = styled.ul<{ withPadding?: boolean }>`
  padding: 0;
  margin: 0;
  list-style: none;
  ${props =>
    props.withPadding &&
    css`
      padding-left: 20px;
    `}
`;

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = React.useState<Set<string>>(
    new Set(pathname),
  );

  const toggleExpanded = (url: string) => {
    if (expanded.has(url)) {
      expanded.delete(url);
    } else {
      expanded.add(url);
    }
    setExpanded(new Set(expanded));
  };

  const matchExpanded = (path: string) => {
    const res = [...expanded].find(inUrl => inUrl.indexOf(path) !== -1);

    return res !== undefined;
  };

  return (
    <Nav>
      <List>
        <li>
          Core
          <ul>
            <li>
              v1.2.x
              <ul>
                <li>
                  <Link to="/docs/core/v1.2.x">Core v1.2.x introduction</Link>
                </li>
                <li>
                  <Link to="/docs/core/v1.2.x/api">Core v1.2.x api</Link>
                </li>
                <li>
                  <Link to="/docs/core/v1.2.x/middlewares">
                    Core v1.2.x middlewares
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              v2.0.x
              <ul>
                <li>
                  <Link to="/docs/core/v2.0.x">Core v2.0.x introduction</Link>
                </li>
                <li>
                  <Link to="/docs/core/v2.0.x/setup">Core v2.0.x setup</Link>
                </li>
                <li>
                  <Link to="/docs/core/v2.0.x/api">Core v2.0.x api</Link>
                </li>
                <li>
                  <Link to="/docs/core/v2.0.x/middlewares">
                    Core v2.0.x middlewares
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </List>
      {[...new Array(15).keys()].map(key => (
        <Paragraph key={key.toString()}>
          Lorem ipsum consequat deserunt sint dolor nostrud enim incididunt
          cupidatat reprehenderit nisi fugiat veniam adipisicing ex consectetur.
        </Paragraph>
      ))}
    </Nav>
  );
};

export default Sidebar;
