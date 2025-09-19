"use client"

import Image from "next/image";
import styled from 'styled-components';

const ContactsContainer = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f0e0 100%);
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

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  margin-bottom: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 10px;
  border-left: 4px solid #d4af37;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    background: rgba(212, 175, 55, 0.2);
    border-left-color: #8a1f1f;
    box-shadow: 0 4px 12px rgba(138, 31, 31, 0.15);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h3`
  color: #2c2c2c;
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const ContactHandle = styled.p`
  color: #8a1f1f;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8a1f1f 0%, #c62f2f 100%);
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 4px 15px rgba(138, 31, 31, 0.3);
  }
`;

function MyContacts() {
  return (
    <ContactsContainer>
      <Header>
        <span>📞</span>
        Contact Information
      </Header>
      <ContactList>
        <ContactItem>
          <ContactInfo>
            <ContactTitle>Telegram</ContactTitle>
            <ContactHandle>@desointj</ContactHandle>
          </ContactInfo>
          <IconWrapper>
            <Image
              src="/static/images/website_icons/telegram.svg"
              alt="Telegram icon"
              width={30}
              height={30}
            />
          </IconWrapper>
        </ContactItem>
        
        <ContactItem>
          <ContactInfo>
            <ContactTitle>GitHub</ContactTitle>
            <ContactHandle>Desolateeeooo</ContactHandle>
          </ContactInfo>
          <IconWrapper>
            <Image
              src="/static/images/website_icons/github.svg"
              alt="GitHub icon"
              width={30}
              height={30}
            />
          </IconWrapper>
        </ContactItem>
        
        <ContactItem>
          <ContactInfo>
            <ContactTitle>Discord</ContactTitle>
            <ContactHandle>amasawaerutan</ContactHandle>
          </ContactInfo>
          <IconWrapper>
            <Image
              src="/static/images/website_icons/discord.svg"
              alt="Discord icon"
              width={30}
              height={30}
            />
          </IconWrapper>
        </ContactItem>
      </ContactList>
    </ContactsContainer>
  );
}

export default MyContacts;