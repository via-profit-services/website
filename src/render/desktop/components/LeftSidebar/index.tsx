import * as React from 'react';
import styled, { css } from 'styled-components';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import { Link, useLocation, useParams } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { useSelector } from 'react-redux';

import { useUrlBuilder } from '~/utils/url-builder';
import { DEFAULT_LOCALE } from '~/utils/constants';

const ChevronIcon = styled(ChevronRightIcon)`
  margin-left: 10px;
  position: relative;
  transition: transform ease-out 240ms;
`;

const List = styled.ul<{ withPadding?: boolean }>`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: hidden;
  will-change: max-height;
  ${props =>
    props.withPadding &&
    css`
      padding-left: 20px;
    `}
`;

const ListLi = styled.li`
  padding: 0;
  margin: 0;
`;

const ListItemLink = styled(Link)<{ active?: boolean }>`
  display: flex;
  padding: 10px 12px;
  text-decoration: none;
  color: #212121;
  font-weight: 200;
  &:visited {
    color: #212121;
  }
  ${props =>
    props?.active &&
    css`
      color: red;
    `}
`;

const ListItemCollapsedLink = styled.a<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  text-decoration: none;
  color: #212121;
  font-weight: 200;
  &:visited {
    color: #212121;
  }
  ${props =>
    props?.active &&
    css`
      color: red;
    `}
`;

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = React.useState<Set<string>>(
    new Set(pathname),
  );

  const params = useParams<{ locale?: string }>();
  // const locale = useSelector<ReduxState, ReduxSelectedLocale>(
  //   state => state.locale,
  // );
  const buildUrl = useUrlBuilder(params?.locale || DEFAULT_LOCALE);
  // const buildUrl = s => s;
  // const { urlMap } = useUrlMap();

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
    <ul>
      <li>
        Core
        <ul>
          <li>
            v1.2.x
            <ul>
              <li>
                <Link to={buildUrl('/docs/core/v1.2.x')}>
                  Core v1.2.x introduction
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/docs/core/v1.2.x/api')}>
                  Core v1.2.x api
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/docs/core/v1.2.x/middlewares')}>
                  Core v1.2.x middlewares
                </Link>
              </li>
            </ul>
          </li>
          <li>
            v2.0.x
            <ul>
              <li>
                <Link to={buildUrl('/docs/core/v2.0.x')}>
                  Core v2.0.x introduction
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/docs/core/v2.0.x/api')}>
                  Core v2.0.x api
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/docs/core/v2.0.x/middlewares')}>
                  Core v2.0.x middlewares
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );

  // return (
  //   <List>
  //     <ListLi>
  //       <ListItemLink to={urlMap.docs.introduction}>Introduction</ListItemLink>
  //     </ListLi>

  //     <ListLi>
  //       <Collapsible
  //         transitionTime={240}
  //         transitionCloseTime={240}
  //         open={matchExpanded(urlMap.docs.core['v1.2.x'].introduction)}
  //         trigger={
  //           <ListItemCollapsedLink
  //             href={`#-${urlMap.docs.core['v1.2.x'].introduction}`}
  //             onClick={e => {
  //               e.preventDefault();
  //               toggleExpanded(urlMap.docs.core['v1.2.x'].introduction);
  //             }}>
  //             Core
  //             <ChevronIcon />
  //           </ListItemCollapsedLink>
  //         }>
  //         <List withPadding>
  //           <ListLi>
  //             <ListItemLink to={urlMap.docs.core['v1.2.x'].introduction}>
  //               Introduction
  //             </ListItemLink>
  //           </ListLi>

  //           <ListLi>
  //             <ListItemLink to={urlMap.docs.core['v1.2.x'].api}>
  //               API
  //             </ListItemLink>
  //           </ListLi>
  //           <ListLi>
  //             <ListItemLink to={urlMap.docs.core['v1.2.x'].middlewares}>
  //               Middlewares
  //             </ListItemLink>
  //           </ListLi>
  //           <ListLi>
  //             <ListItemLink to="/docs/core/404">404</ListItemLink>
  //           </ListLi>
  //         </List>
  //       </Collapsible>
  //     </ListLi>

  //     <ListLi>
  //       <Collapsible
  //         transitionTime={240}
  //         transitionCloseTime={240}
  //         open={matchExpanded(urlMap.docs.knex.introduction)}
  //         trigger={
  //           <ListItemCollapsedLink
  //             href={`#-${urlMap.docs.knex.introduction}`}
  //             onClick={e => {
  //               e.preventDefault();
  //               toggleExpanded(urlMap.docs.knex.introduction);
  //             }}>
  //             Knex
  //             <ChevronIcon />
  //           </ListItemCollapsedLink>
  //         }>
  //         <List withPadding>
  //           <ListLi>
  //             <ListItemLink to={urlMap.docs.knex.introduction}>
  //               Introduction
  //             </ListItemLink>
  //           </ListLi>

  //           <ListLi>
  //             <ListItemLink to={urlMap.docs.knex.api}>API</ListItemLink>
  //           </ListLi>
  //         </List>
  //       </Collapsible>
  //     </ListLi>
  //   </List>
  // );
};

export default Sidebar;
