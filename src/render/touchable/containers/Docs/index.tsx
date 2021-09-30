import * as React from 'react';
import loadable from '@loadable/component';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import Header from '~/render/touchable/components/Header';
import Footer from '~/render/touchable/components/Footer';
import NavbarButton from '~/render/touchable/components/NavbarDrawer/NavbarButton';
import Meta from '~/render/desktop/components/Meta';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  margin-top: -3em;
  position: relative;
  flex: 1;
`;

const Fallback = loadable(
  () => import('~/render/touchable/containers/Fallback/index'),
  { fallback: <LoadingIndicator /> },
);

const Introduction = loadable(
  () => import('~/render/desktop/containers/Docs/introduction/index'),
  { fallback: <LoadingIndicator /> },
);

const Core = loadable(
  () => import('~/render/desktop/containers/Docs/core/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Knex = loadable(
  () => import('~/render/desktop/containers/Docs/knex/index'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Docs: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Meta />
      <Header />
      <NavbarButton />
      <Main>
        <article>
          <Switch>
            <Route strict path={`${path}/core`} component={Core} />
            <Route strict path={`${path}/knex`} component={Knex} />
            <Route strict path={path} component={Introduction} />
            <Route component={Fallback} />
          </Switch>
        </article>
      </Main>
      <Footer />
    </>
  );
};

export default Docs;
