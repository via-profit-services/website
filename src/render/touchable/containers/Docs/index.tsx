import * as React from 'react';
import styled from 'styled-components';

import Header from '~/render/touchable/components/Header';
import Footer from '~/render/touchable/components/Footer';
import NavbarButton from '~/render/touchable/components/NavbarDrawer/NavbarButton';
import Meta from '~/render/desktop/components/Meta';
import Routes from '~/render/desktop/containers/Docs/Routes';

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
        <Routes />
      </Article>
    </Main>
    <Footer />
  </>
);

export default Docs;
