import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ChevronDoubleRightIcon from 'mdi-react/ChevronDoubleRightIcon';

import Paragraph from '~/render/desktop/components/Typography/Paragraph';
import H2 from '~/render/desktop/components/Typography/H2';
import Subtitle from '~/render/desktop/components/Typography/Subtitle';
import Card from './PackageCard';
import CoreIcon from '~/render/desktop/components/Icons/Core';
import KnexIcon from '~/render/desktop/components/Icons/Knex';
import RedisIcon from '~/render/desktop/components/Icons/Redis';
import SubscriptionsIcon from '~/render/desktop/components/Icons/Subscriptions';
import PermissionsIcon from '~/render/desktop/components/Icons/Permissions';
import FileStorageIcon from '~/render/desktop/components/Icons/FileStorage';
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

const SectionPackages: React.FC = () => (
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
        <Card
          link="/packages/core"
          icon={<CoreIcon />}
          header={
            <FormattedMessage
              defaultMessage="Core"
              description="SectionPackages. Core. Header"
            />
          }
          content={
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
          }
        />
        <Card
          link="packages/subscriptions"
          icon={<SubscriptionsIcon />}
          header={
            <FormattedMessage
              defaultMessage="Subscriptions"
              description="SectionPackages. Subscriptions. Header"
            />
          }
          content={
            <>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Subscriptions eiusmod consequat proident ipsum."
                  description="SectionPackages. Subscriptions. Content paragraph 1"
                />
              </Paragraph>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Subscriptions mollit dolore reprehenderit exercitation."
                  description="SectionPackages. Subscriptions. Content paragraph 2"
                />
              </Paragraph>
            </>
          }
        />
        <Card
          link="/packages/knex"
          icon={<KnexIcon />}
          header={
            <FormattedMessage
              defaultMessage="Knex"
              description="SectionPackages. Knex. Header"
            />
          }
          content={
            <>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Knex eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                  description="SectionPackages. Knex. Content paragraph 1"
                />
              </Paragraph>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Knex mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                  description="SectionPackages. Knex. Content paragraph 2"
                />
              </Paragraph>
            </>
          }
        />
        <Card
          link="/packages/redis"
          icon={<RedisIcon />}
          header={
            <FormattedMessage
              defaultMessage="Redis"
              description="SectionPackages. Redis. Header"
            />
          }
          content={
            <>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Redis eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                  description="SectionPackages. Redis. Content paragraph 1"
                />
              </Paragraph>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Redis mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                  description="SectionPackages. Redis. Content paragraph 2"
                />
              </Paragraph>
            </>
          }
        />
        <Card
          link="/packages/permissions"
          icon={<PermissionsIcon />}
          header={
            <FormattedMessage
              defaultMessage="Permissions"
              description="SectionPackages. Permissions. Header"
            />
          }
          content={
            <>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Permissions eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                  description="SectionPackages. Permissions. Content paragraph 1"
                />
              </Paragraph>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="Permissions mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                  description="SectionPackages. Permissions. Content paragraph 2"
                />
              </Paragraph>
            </>
          }
        />
        <Card
          link="/packages/file-storage"
          icon={<FileStorageIcon />}
          header={
            <FormattedMessage
              defaultMessage="File storage"
              description="SectionPackages. File storage. Header"
            />
          }
          content={
            <>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="File storage eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit. Proident eiusmod anim enim ea exercitation proident."
                  description="SectionPackages. File storage. Content paragraph 1"
                />
              </Paragraph>
              <Paragraph>
                <FormattedMessage
                  defaultMessage="File storage mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
                  description="SectionPackages. File storage. Content paragraph 2"
                />
              </Paragraph>
            </>
          }
        />
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

export default SectionPackages;
