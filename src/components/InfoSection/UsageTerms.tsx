"use client"

import styled from 'styled-components';

const TermsContainer = styled.div`
  background: linear-gradient(135deg, #f8f0e0 0%, #f5ebd3 100%);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e8e8e8;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  color: #8a1f1f;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #d4af37;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Ma Shan Zheng', cursive;
`;

const Content = styled.div`
  line-height: 1.7;
  color: #2c2c2c;
`;

const Paragraph = styled.p`
  margin-bottom: 1.2rem;
  text-align: justify;
`;

const Highlight = styled.span`
  color: #8a1f1f;
  font-weight: 600;
`;

function UsageTerms() {
  return (
    <TermsContainer>
      <Header>
        <span>📜</span>
        Usage Terms & Disclaimer
      </Header>
      <Content>
        <Paragraph>
          <Highlight>ChinaTalk</Highlight> is a personal project created <Highlight>exclusively for educational and learning purposes</Highlight>. 
          This application is not intended for commercial use or widespread distribution.
        </Paragraph>
        
        <Paragraph>
          I have developed this platform to enhance my skills in web development, particularly with <Highlight>React, Next.js, TypeScript, and Redux</Highlight>. 
          The content displayed is sourced from public APIs and is not owned or created by me.
        </Paragraph>
        
        <Paragraph>
          <Highlight>No intention to harm or offend:</Highlight> This application is built with respect for Chinese culture and the Reddit community. 
          If any content appears inappropriate or offensive, please understand this is unintentional and results from the nature of public API data.
        </Paragraph>
        
        <Paragraph>
          <Highlight>Fair Use:</Highlight> This project operates under fair use principles for educational purposes. 
          All copyrights and intellectual property rights remain with their respective owners.
        </Paragraph>
        
        <Paragraph>
          <Highlight>No Data Collection:</Highlight> This application does not collect, store, or process any personal user data. 
          All interactions are client-side, and no information is transmitted to any external servers besides the necessary API calls to Reddit.
        </Paragraph>
        
        <Paragraph>
          By using this application, you acknowledge that this is a <Highlight>demonstration project</Highlight> and agree to these terms of use.
        </Paragraph>
      </Content>
    </TermsContainer>
  );
}

export default UsageTerms;