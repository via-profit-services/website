import * as React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import SafeFrame from '~/render/desktop/components/SafeFrame';
import { LINK_COMPANY, LINK_GITHUB } from '~/utils/constants';

const Container = styled.div`
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.text.inverse};
`;

const Inner = styled(SafeFrame)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

const Section = styled.div<{ $position: 'left' | 'center' | 'right' }>`
  ${props =>
    props.$position === 'right' &&
    css`
      text-align: right;
    `};
  ${props =>
    props.$position === 'center' &&
    css`
      & ul {
        margin: 0 1rem;
      }
    `};
`;

const SectionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
`;

const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const linkStyles = css`
  color: inherit;
  text-decoration: underline;
  font-size: 0.8125rem;
`;

const InternalLink = styled(Link)`
  ${linkStyles}
`;

const ExternalLink = styled.a`
  ${linkStyles}
`;

const FooterMiddle: React.FC = () => (
  <Container>
    <Inner>
      <Section $position="left">
        <SectionTitle>
          <FormattedMessage
            defaultMessage="Legal"
            description="Footer. Title of the «Legal» section"
          />
        </SectionTitle>
        <LinksList>
          <li>
            <InternalLink to="/legal/privacy">
              <FormattedMessage
                defaultMessage="Privacy Policy"
                description="Footer. Privacy link"
              />
            </InternalLink>
          </li>
          <li>
            <InternalLink to="/legal/terms">
              <FormattedMessage
                defaultMessage="Terms"
                description="Footer. Terms link"
              />
            </InternalLink>
          </li>
          <li>
            <InternalLink to="/legal/cookie">
              <FormattedMessage
                defaultMessage="Cookie policy"
                description="Footer. Cookie policy link"
              />
            </InternalLink>
          </li>
        </LinksList>
      </Section>
      <Section $position="center">
        <SectionTitle>
          <FormattedMessage
            defaultMessage="Packages"
            description="Footer. Title of the «Packages» section"
          />
        </SectionTitle>
        <LinksContainer>
          <LinksList>
            <li>
              <InternalLink to="/packages/core">
                <FormattedMessage
                  defaultMessage="Core"
                  description="Footer. package core link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/Knex">
                <FormattedMessage
                  defaultMessage="Knex"
                  description="Footer. Package knex link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/redis">
                <FormattedMessage
                  defaultMessage="Redis"
                  description="Footer. Package redis link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/subscriptions">
                <FormattedMessage
                  defaultMessage="Subscriptions"
                  description="Footer. Package subscriptions link"
                />
              </InternalLink>
            </li>
          </LinksList>

          <LinksList>
            <li>
              <InternalLink to="/packages/accounts">
                <FormattedMessage
                  defaultMessage="Accounts"
                  description="Footer. Package accounts link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/permissions">
                <FormattedMessage
                  defaultMessage="Permissions"
                  description="Footer. Package permissions link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/messages">
                <FormattedMessage
                  defaultMessage="Messages"
                  description="Footer. Package messages link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/sms">
                <FormattedMessage
                  defaultMessage="SMS"
                  description="Footer. Package sms link"
                />
              </InternalLink>
            </li>
          </LinksList>

          <LinksList>
            <li>
              <InternalLink to="/packages/file-storage">
                <FormattedMessage
                  defaultMessage="File Storage"
                  description="Footer. Package file-storage link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/settings-manager">
                <FormattedMessage
                  defaultMessage="Settings manager"
                  description="Footer. Package settings-manager link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/dataloader">
                <FormattedMessage
                  defaultMessage="Dataloader"
                  description="Footer. Package dataloader link"
                />
              </InternalLink>
            </li>
            <li>
              <InternalLink to="/packages/geography">
                <FormattedMessage
                  defaultMessage="Geography"
                  description="Footer. Package geography link"
                />
              </InternalLink>
            </li>
          </LinksList>
        </LinksContainer>
      </Section>
      <Section $position="right">
        <SectionTitle>
          <FormattedMessage
            defaultMessage="Company"
            description="Footer. Title of the «Company» section"
          />
        </SectionTitle>
        <LinksList>
          <li>
            <ExternalLink
              href={LINK_GITHUB}
              rel="noopener noreferrer"
              target="_blank">
              <FormattedMessage
                defaultMessage="GitHub"
                description="Footer. GitHub link"
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINK_COMPANY} target="_blank">
              <FormattedMessage
                defaultMessage="Website"
                description="Footer. company website link"
              />
            </ExternalLink>
          </li>
        </LinksList>
      </Section>
    </Inner>
  </Container>
);

export default FooterMiddle;