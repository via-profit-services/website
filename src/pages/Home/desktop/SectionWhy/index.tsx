import * as React from 'react';
import styled from 'styled-components';
import { useIntl, FormattedMessage } from 'react-intl';
import CheckIcon from 'mdi-react/CheckIcon';

import H2 from '~/components/desktop/Typography/H2';
import Paragraph from '~/components/desktop/Typography/Paragraph';
import schemasrc from 'assets/images/section-why-schema.svg';

const Section = styled.section`
  margin-top: 3rem;
  padding: 2rem 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.color.grey[400]};
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[400]};
`;

const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
  display: flex;
  justify-content: space-between;
`;

const ImageBlock = styled.div`
  flex-basis: 50%;
  flex-shrink: 0.5;
  flex-grow: 0.5;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  @media (max-width: 780px) {
    display: none;
  }
`;

const SchemaImage = styled.img`
  object-fit: contain;
`;

const ContentBlock = styled.div`
  flex-basis: 50%;
  flex-shrink: 0.5;
  flex-grow: 0.5;
  @media (max-width: 780px) {
    flex: 1;
  }
`;

const Text = styled.div`
  margin: 1rem 0 1.5rem 0;
  max-width: 460px;
  color: ${({ theme }) => theme.color.text.secondary};
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
  & > i {
    position: absolute;
    left: 0.3rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.accent.primary};
    :before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 1.4em;
      height: 1.4em;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.color.accent.primary};
    }
  }
`;

const SectionWhy: React.FC = () => {
  const intl = useIntl();

  return (
    <Section>
      <Inner>
        <ImageBlock>
          <SchemaImage
            width="340"
            height="500"
            src={schemasrc}
            alt={intl.formatMessage({
              defaultMessage:
                'Graphql schema with via profit services packages',
              description: 'Why screen. Alt of schema image',
            })}
          />
        </ImageBlock>
        <ContentBlock>
          <H2>
            <FormattedMessage
              defaultMessage="Why"
              description="Why screen. Header"
            />
          </H2>
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
        </ContentBlock>
      </Inner>
    </Section>
  );
};

export default SectionWhy;
