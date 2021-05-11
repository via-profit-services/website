import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';


const Container = styled.div`
  color: #f9f6ef;
  background: #28293c;
`;

const ContentInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  padding-bottom: 30px;
  margin: 0 auto;
  border-top: 1px solid #1e1f2e;
`;

const BottomInner = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  margin: 0 auto;
  font-size: 0.9em;
  background: #1e1f2e;
  padding: 12px 0;
`;


const FooterSection = styled.div<{ textAlign: 'left' | 'center' | 'right' }>`
  text-align: ${props => props.textAlign};
`;

const SectionTitle = styled.h4`
  
`;

const scope = 'components.Footer';

const Footer: React.FC = () => (
  <Container>
    <ContentInner>
      <FooterSection textAlign="left">
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionDocs.title`}
            defaultMessage="Docs"
          />
        </SectionTitle>
        Section docs
      </FooterSection>
      <FooterSection textAlign="left">
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionModules.title`}
            defaultMessage="Modules"
          />
        </SectionTitle>
        Section modules
      </FooterSection>
      <FooterSection textAlign="center">
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionExamples.title`}
            defaultMessage="Examples"
          />
        </SectionTitle>
        Section examples
      </FooterSection>
      <FooterSection textAlign="right">
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionAbout.title`}
            defaultMessage="About"
          />
        </SectionTitle>
        Section about
      </FooterSection>
      <FooterSection textAlign="right">
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionGithub.title`}
            defaultMessage="Github"
          />
        </SectionTitle>
        Section github
      </FooterSection>
    </ContentInner>
    <BottomInner>
      Other data
    </BottomInner>
  </Container>
);

export default Footer;