"use client"

import Image from 'next/image';
import styled from 'styled-components';

const ContactsContainer = styled.div`
  h3 {
    color: #f8e7b6;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
    
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 12px rgba(212, 175, 55, 0.4);
        transform: scale(1.1);
      }
    }
  }
`;

function Contacts() {
  return (
    <ContactsContainer>
      <h3>Contact me:</h3>
      <SocialList>
        <li>
          <span>
            <Image
              src="/static/images/website_icons/telegram.svg"
              alt="Telegram icon"
              width={24}
              height={24}
            />
          </span>
        </li>
        <li>
          <span>
            <Image
              src="/static/images/website_icons/github.svg"
              alt="GitHub icon"
              width={24}
              height={24}
            />
          </span>
        </li>
        <li>
          <span>
            <Image
              src="/static/images/website_icons/discord.svg"
              alt="Discord icon"
              width={24}
              height={24}
            />
          </span>
        </li>
      </SocialList>
    </ContactsContainer>
  )
}

export default Contacts;