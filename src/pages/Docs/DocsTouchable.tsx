import * as React from 'react';
import styled from 'styled-components';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import NavbarButton from '~/components/touchable/NavbarDrawer/NavbarButton';
import Meta from '~/components/desktop/Meta';
import DocsRouter from '~/routes/DocsRouter';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const Article = styled.article``;

const Docs: React.FC = () => (
  <>
    <Meta />
    <Header />
    <NavbarButton />
    <Main>
      <Article>
        <DocsRouter />
      </Article>
    </Main>
    <Footer />
  </>
);

export default Docs;
