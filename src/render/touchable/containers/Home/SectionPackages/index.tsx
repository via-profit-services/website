import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';

import H2 from '~/render/touchable/components/Typography/H2';
import Subtitle from '~/render/touchable/components/Typography/Subtitle';
import Paragraph from '~/render/touchable/components/Typography/Paragraph';
import Card from './PackageCard';
import CoreIcon from '~/render/desktop/components/Icons/Core';

const Section = styled.section`
  display: flex;
  flex-flow: column;
`;

const Inner = styled.div`
  padding: ${({ theme }) => theme.grid.touchable.gutter}px;
`;

const SectionPackages: React.FC = () => (
  <Section>
    <Inner>
      <H2>
        <FormattedMessage
          defaultMessage="List of all packages"
          description="Touchable packages. Header"
        />
      </H2>
      <Subtitle>
        <FormattedMessage
          defaultMessage="We have prepared several ready-made packages that are easy to install and use"
          description="SectionPackages. Subtitle"
        />
      </Subtitle>
    </Inner>

    <div>
      <Card
        link="/packages/core"
        icon={<CoreIcon />}
        header={
          <FormattedMessage
            defaultMessage="Core"
            description="SectionPackages touchable. Core. Header"
          />
        }
        content={
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit "
                description="SectionPackages touchable. Core. Content paragraph"
              />
            </Paragraph>
          </>
        }
      />
      <Card
        link="/packages/subscriptions"
        icon={<CoreIcon />}
        header={
          <FormattedMessage
            defaultMessage="Subscriptions"
            description="SectionPackages touchable. Subscriptions. Header"
          />
        }
        content={
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Subscriptions Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit "
                description="SectionPackages touchable. Subscriptions. Content paragraph"
              />
            </Paragraph>
          </>
        }
      />
      <Card
        link="/packages/knex"
        icon={<CoreIcon />}
        header={
          <FormattedMessage
            defaultMessage="Knex"
            description="SectionPackages touchable. Knex. Header"
          />
        }
        content={
          <>
            <Paragraph>
              <FormattedMessage
                defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit "
                description="SectionPackages touchable. Knex. Content paragraph"
              />
            </Paragraph>
          </>
        }
      />
    </div>
  </Section>
);

export default SectionPackages;
