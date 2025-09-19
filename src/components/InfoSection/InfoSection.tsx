"use client"

import styled from 'styled-components';
import MyContacts from './MyContacts';
import UsageTerms from './UsageTerms';
import BackButton from './BackButton';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f2e3 0%, #f5ebd3 100%);
  padding: 2rem;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #8a1f1f;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Ma Shan Zheng', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin: 0;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function InfoSection() {
  return (
    <PageContainer>
      <ContentContainer>
        <Header>
          <BackButton />
          <Title>ChinaTalk Information</Title>
          <Subtitle>Project Details, Contacts, and Terms of Use</Subtitle>
        </Header>
        
        <MainContent>
          <UsageTerms />
          <MyContacts />
        </MainContent>
      </ContentContainer>
    </PageContainer>
  );
}

export default InfoSection;