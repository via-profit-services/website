import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import CheckIcon from 'mdi-react/CheckIcon';

import H2 from '~/render/touchable/components/Typography/H2';
import Paragraph from '~/render/touchable/components/Typography/Paragraph';
import schemasrc from 'assets/images/touchable-graph.png';

const Container = styled.section`
  position: relative;
  z-index: 1;
  margin-top: -3.5rem;
  color: ${({ theme }) => theme.color.text.inverse};
  &:before {
    content: '';
    position: absolute;
    width: 70%;
    height: 100%;
    background: url(${schemasrc}) no-repeat center left;
    user-select: none;
    pointer-events: none;
    opacity: 0.1;
    left: 30%;
    top: 50%;
    transform: translate(0, -40%);
  }
`;

const Center = styled.div`
  background-color: ${({ theme }) => theme.color.accent.primary};
  padding: 0 ${({ theme }) => theme.grid.touchable.gutter}px;
  padding-bottom: 20px;
  overflow: hidden;
`;

const SvgTop = styled.svg`
  vertical-align: top;
  position: relative;
  top: 1px;
`;

const SvgBottom = styled.svg`
  vertical-align: top;
  position: relative;
  top: -1px;
`;

const Path = styled.path`
  fill: ${({ theme }) => theme.color.accent.primary};
`;

const Header = styled(H2)`
  margin-bottom: 2.5rem;
`;

const Text = styled.div`
  margin: 1rem 0 1.5rem 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  margin: 0.8rem 0;
  padding: 0 0 0 2rem;
  position: relative;
  font-weight: 400;
  & > i {
    position: absolute;
    left: 0.3rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.text.inverse};
    :before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 1.4em;
      height: 1.4em;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.color.text.inverse};
    }
  }
`;

const SectionWhy: React.FC = () => (
  <Container>
    <SvgTop
      width="100%"
      height="100%"
      preserveAspectRatio="xMaxYMax meet"
      viewBox="0 0 375 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        width="100%"
        height="100%"
        clipRule="evenodd"
        d="M203 2.064C97.207 10.847 0 46.547 0 46.547V57h375V15.367S308.793-6.718 203 2.064Z"
      />
    </SvgTop>

    <Center>
      <Header>
        <FormattedMessage
          defaultMessage="Why"
          description="Why screen. Header"
        />
      </Header>
      <Text>
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit."
            description="Why screen. First paragraph"
          />
        </Paragraph>
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod anim enim ea exercitation proident. Mollit mollit dolore."
            description="Why screen. Second paragraph"
          />
        </Paragraph>
      </Text>

      <List>
        <Li>
          <i>
            <CheckIcon size="1em" color="currentColor" />
          </i>
          <FormattedMessage
            defaultMessage="Eprehenderit qui laborum dolor cillum"
            description="Why screen. First advantage"
          />
        </Li>
        <Li>
          <i>
            <CheckIcon size="1em" color="currentColor" />
          </i>
          <FormattedMessage
            defaultMessage="Ad ullamco culpa aute sit"
            description="Why screen. Second advantage"
          />
        </Li>
        <Li>
          <i>
            <CheckIcon size="1em" color="currentColor" />
          </i>
          <FormattedMessage
            defaultMessage="Fugiat laborum nulla fugiat"
            description="Why screen. Third advantage"
          />
        </Li>
      </List>
    </Center>

    <SvgBottom
      width="100%"
      height="100%"
      preserveAspectRatio="xMaxYMax meet"
      viewBox="0 0 375 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        width="100%"
        height="100%"
        clipRule="evenodd"
        d="M0 0v22.461S109 42 230.5 42 375 22.461 375 22.461V0H0Z"
      />
    </SvgBottom>
  </Container>
);

export default SectionWhy;
