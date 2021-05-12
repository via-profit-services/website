import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import { Link, LinkProps, useRouteMatch, useLocation } from 'react-router-dom';

import Collapsable from '~/components/Collapsable';
import { useUrlMap } from '~/context/ui';
import buildUrl from '~/utils/buildUrl';

const ChevronIcon = styled(ChevronRightIcon)`
  margin-left: 10px;
  position: relative;
  transition: transform ease-out 240ms;
`;

const List = styled.ul<{ withPadding?: boolean; }>`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: hidden;
  will-change: max-height;
  ${props => props.withPadding && css`
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
  color: #fff;
  font-weight: 200;
  &:visited {
    color: #fff;
  }
  ${props => props?.active && css`
    color: red;
  `}
`;

const ListItemCollapsedLink = styled.a<{ active?: boolean }>`
  display: flex;
  padding: 10px 12px;
  text-decoration: none;
  color: #fff;
  font-weight: 200;
  &:visited {
    color: #fff;
  }
  ${props => props?.active && css`
    color: red;
  `}
`;



const Sidebar: React.FC = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const [ expanded, setExpanded ] = useState<Set<string>>(new Set(pathname));
  const { urlMap } = useUrlMap();
  // const match = useRouteMatch({
  //   path,
  //   strict: true,
  //   sensitive: true
  // });

  // useEffect(() => {
    
  // }, []);

  const toggleExpanded = (url: string) => {
    if (expanded.has(url)) {
      expanded.delete(url);
    } else {
      expanded.add(url);
    }
    setExpanded(new Set(expanded));
  }

  const matchExpanded = (path: string) => {
    const res = [...expanded].find((inUrl) => inUrl.indexOf(path) !== -1);

    return res !== undefined;
  }

  return (
    <List>
      <ListLi>
        <ListItemLink to={urlMap.docs.introduction}>
          Introduction
        </ListItemLink>
      </ListLi>

      <ListLi>
        <ListItemCollapsedLink
          onClick={() => toggleExpanded(urlMap.docs.core.introduction)}
        >
          Core
        </ListItemCollapsedLink>
        <Collapsable expanded={matchExpanded(urlMap.docs.core.introduction)}>
          <List withPadding>
            <ListLi>
              <ListItemLink to={urlMap.docs.core.introduction} >
                Introduction
              </ListItemLink>
            </ListLi>

            <ListLi>
              <ListItemLink to={urlMap.docs.core.api} >
                API
              </ListItemLink>
            </ListLi>
            <ListLi>
              <ListItemLink to={urlMap.docs.core.middlewares} >
                Middlewares
              </ListItemLink>
            </ListLi>
            <ListLi>
              <ListItemLink to="/docs/core/404">
                404
              </ListItemLink>
            </ListLi>
          </List>
        </Collapsable>
      </ListLi>

      <ListLi>
        <ListItemLink to={urlMap.docs.knex.introduction} >
          Knex
        </ListItemLink>
      </ListLi>
    </List>
  )

}

export default Sidebar;