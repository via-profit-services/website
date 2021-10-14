import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import ChevronDoubleRightIcon from 'mdi-react/ChevronDoubleRightIcon';

import Paragraph from '~/render/desktop/components/Typography/Paragraph';
import H2 from '~/render/desktop/components/Typography/H2';
import Subtitle from '~/render/desktop/components/Typography/Subtitle';
import Card, { CardProps } from './PackageCard';
import CoreIcon from '~/render/desktop/components/Icons/Core';
import dotssrc from 'assets/images/dots-grey.svg';

const Section = styled.section`
  position: relative;
  padding: 2rem 0;
  margin: 0 auto;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 72px;
    height: 168px;
    background-image: url(${dotssrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
`;

const Cards = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  & > div {
    flex-basis: 33%;
    display: flex;

    @media (max-width: 960px) {
      flex-basis: 50%;
    }

    @media (max-width: 580px) {
      flex-basis: 100%;
    }
  }
  & p {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

const MoreLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1em 2em;
  color: ${({ theme }) => theme.color.text.secondary};
  border: 1px solid currentColor;
  border-radius: 36px;
  text-decoration: none;
  & > svg {
    margin-left: 0.2em;
  }
  &:visited {
    color: currentColor;
  }
  &:hover {
    color: ${({ theme }) => theme.color.accent.secondary};
  }
`;

const SectionPackages: React.FC = () => {
  const intl = useIntl();
  const cards: CardProps[] = React.useMemo(
    () => [
      {
        link: '/packages/core',
        icon: <CoreIcon />,
        header: intl.formatMessage({
          defaultMessage: 'Core',
          description: 'SectionPackages. Core. Header',
        }),
        content: (
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                description="SectionPackages. Core. Content paragraph 1"
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                description="SectionPackages. Core. Content paragraph 2"
              />
            </Paragraph>
          </>
        ),
      },
      {
        link: '/packages/knex',
        icon: <CoreIcon />,
        header: intl.formatMessage({
          defaultMessage: 'Knex',
          description: 'SectionPackages. knex. Header',
        }),
        content: (
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                description="SectionPackages. Knex. Content paragraph 1"
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                description="SectionPackages. Knex. Content paragraph 2"
              />
            </Paragraph>
          </>
        ),
      },
      {
        link: '/packages/subscriptions',
        icon: <CoreIcon />,
        header: intl.formatMessage({
          defaultMessage: 'Subscriptions',
          description: 'SectionPackages. Subscriptions. Header',
        }),
        content: (
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                description="SectionPackages. Subscriptions. Content paragraph 1"
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                description="SectionPackages. Subscriptions. Content paragraph 2"
              />
            </Paragraph>
          </>
        ),
      },
      {
        link: '/packages/files',
        icon: <CoreIcon />,
        header: intl.formatMessage({
          defaultMessage: 'Files',
          description: 'SectionPackages. Files. Header',
        }),
        content: (
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                description="SectionPackages. Files. Content paragraph 1"
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                description="SectionPackages. Files. Content paragraph 2"
              />
            </Paragraph>
          </>
        ),
      },
      {
        link: '/packages/redis',
        icon: <CoreIcon />,
        header: intl.formatMessage({
          defaultMessage: 'Redis',
          description: 'SectionPackages. Redis. Header',
        }),
        content: (
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                description="SectionPackages. Redis. Content paragraph 1"
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                description="SectionPackages. Redis. Content paragraph 2"
              />
            </Paragraph>
          </>
        ),
      },

      {
        link: '/packages/dataloader',
        icon: <CoreIcon />,
        header: intl.formatMessage({
          defaultMessage: 'Dataloader',
          description: 'SectionPackages. Dataloader. Header',
        }),
        content: (
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                description="SectionPackages. Dataloader. Content paragraph 1"
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                description="SectionPackages. Dataloader. Content paragraph 2"
              />
            </Paragraph>
          </>
        ),
      },
    ],
    [intl],
  );

  return (
    <Section>
      <Inner>
        <TitleBox>
          <H2>
            <FormattedMessage
              defaultMessage="Packages"
              description="SectionPackages. Header"
            />
          </H2>
          <Subtitle>
            <FormattedMessage
              defaultMessage="We have prepared several ready-made packages that are easy to install and use"
              description="SectionPackages. Subtitle"
            />
          </Subtitle>
        </TitleBox>

        <Cards>
          {cards.map((card, index) => (
            <Card key={index.toString()} {...card} />
          ))}
        </Cards>
        <MoreLinkContainer>
          <MoreLink to="/packages">
            <FormattedMessage
              defaultMessage="See more packages"
              description="SectionPackages. Link to packages page"
            />
            <ChevronDoubleRightIcon size="1em" color="currentColor" />
          </MoreLink>
        </MoreLinkContainer>
      </Inner>
    </Section>
  );
};

export default SectionPackages;
