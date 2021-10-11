import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';

import Card, { CardProps } from './PackageCard';
import CoreIcon from '~/render/desktop/components/Icons/Core';
import Paragraph from '~/render/touchable/components/Typography/Paragraph';

const Bullets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bullet = styled.div<{ $active: boolean }>`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 1em;
  border-radius: 100%;
  &:before {
    content: '';
    position: absolute;
    flex: 1;
    width: 1em;
    height: 1em;
    border-radius: inherit;
    background: ${props =>
      props.$active
        ? props.theme.color.accent.primary
        : props.theme.color.grey[500]};
  }
`;

const PackagesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const intl = useIntl();
  const cards: CardProps[] = [
    {
      link: '/packages/core',
      icon: <CoreIcon />,
      header: intl.formatMessage({
        defaultMessage: 'Core',
        description: 'SectionPackages touchable. Core. Header',
      }),
      content: (
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit "
            description="SectionPackages touchable. Core. Content paragraph"
          />
        </Paragraph>
      ),
    },
    {
      link: '/packages/knex',
      icon: <CoreIcon />,
      header: intl.formatMessage({
        defaultMessage: 'Knex',
        description: 'SectionPackages touchable. Knex. Header',
      }),
      content: (
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit "
            description="SectionPackages touchable. Knex. Content paragraph"
          />
        </Paragraph>
      ),
    },
    {
      link: '/packages/subscriptions',
      icon: <CoreIcon />,
      header: intl.formatMessage({
        defaultMessage: 'Subscriptions',
        description: 'SectionPackages touchable. Subscriptions. Header',
      }),
      content: (
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit "
            description="SectionPackages touchable. Subscriptions. Content paragraph"
          />
        </Paragraph>
      ),
    },
  ];

  return (
    <>
      <SwipeableViews
        enableMouseEvents
        onChangeIndex={index => setActiveIndex(index)}>
        {cards.map((cardProps, slideIndex) => (
          <Card {...cardProps} key={slideIndex.toFixed()} />
        ))}
      </SwipeableViews>
      <Bullets>
        {cards.map((_cardProps, slideIndex) => (
          <Bullet
            key={slideIndex.toFixed()}
            $active={activeIndex === slideIndex}
          />
        ))}
      </Bullets>
    </>
  );
};

export default PackagesCarousel;
