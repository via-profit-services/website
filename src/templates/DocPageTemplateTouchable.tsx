import * as React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '~/components/touchable/Header';
import Footer from '~/components/touchable/Footer';
import DeviceInformer from '~/components/touchable/DeviceInformer';
import NavbarButton from '~/components/touchable/NavbarDrawer/NavbarButton';
import Meta from '~/components/both/Meta';

const Main = styled.main`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const Article = styled.article``;

const DocPageTemplateTouchable: React.FC = () => (
  <>
    <Meta />
    <Header />
    <NavbarButton />
    <Main>
      <Article>
        <Outlet />
      </Article>
    </Main>
    <Footer />
    <DeviceInformer />
  </>
);

export default DocPageTemplateTouchable;
