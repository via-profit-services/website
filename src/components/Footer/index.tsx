import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';


const Container = styled.div`
  background: #f9f6ef;
`;

const ContentInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  padding-bottom: 30px;
  margin: 0 auto;
  border-top: 1px solid #bebebe;
`;

const BottomInner = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${props => props.theme.grid.safeFrame}px;
  padding: 0 ${props => props.theme.grid.gutter / 2}px;
  margin: 0 auto;
  font-size: 0.9em;
  background: #c8c8c8;
  padding: 12px 0;
`;


const FooterSection = styled.div`

`;

const SectionTitle = styled.h4`
  
`;

const scope = 'components.Footer';

const Footer: React.FC = () => (
  <Container>
    <ContentInner>
      <FooterSection>
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionDocs.title`}
            defaultMessage="Docs"
          />
        </SectionTitle>
        Section docs
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionModules.title`}
            defaultMessage="Modules"
          />
        </SectionTitle>
        Section modules
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionExamples.title`}
            defaultMessage="Examples"
          />
        </SectionTitle>
        Section examples
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          <FormattedMessage
            id={`${scope}.sectionAbout.title`}
            defaultMessage="About"
          />
        </SectionTitle>
        Section about
      </FooterSection>
      <FooterSection>
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