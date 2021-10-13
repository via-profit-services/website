import * as React from 'react';
import styled from 'styled-components';

import Header from '~/render/touchable/components/Header';
import Footer from '~/render/touchable/components/Footer';
import Meta from '~/render/desktop/components/Meta';
import Routes from '~/render/desktop/containers/Legal/Routes';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const Article = styled.article``;

const Legal: React.FC = () => (
  <>
    <Meta />
    <Header />
    <Main>
      <Article>
        <Routes />
      </Article>
    </Main>
    <Footer />
  </>
);

export default Legal;
