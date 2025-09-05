"use client"

import Image from 'next/image';
import styled from 'styled-components';

const ContactsContainer = styled.div`
  h3 {
    color: #f8e7b6;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  
  li {
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
    
    span {
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem;
      display: flex;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
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
          <Image
            src="/telegram.svg"
            alt="Telegram icon"
            width={30}
            height={30}
          />
        </li>
        <li>
          <Image
            src="/github.svg"
            alt="GitHub icon"
            width={30}
            height={30}
          />
        </li>
        <li>
          <Image
            src="/discord.svg"
            alt="Discord icon"
            width={30}
            height={30}
          />
        </li>
      </SocialList>
    </ContactsContainer>
  )
}

export default Contacts;