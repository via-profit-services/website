import * as React from 'react';
import styled from 'styled-components';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import Meta from '~/components/both/Meta';
import ExamplesRouter from '~/routes/ExamplesRouter';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const Article = styled.article``;

const ExamplesTouchable: React.FC = () => (
  <>
    <Meta />
    <Header />
    <Main>
      <Article>
        <ExamplesRouter />
      </Article>
    </Main>
    <Footer />
  </>
);

export default ExamplesTouchable;
