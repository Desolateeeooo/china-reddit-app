"use client"

import Image from "next/image";
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.7));
  }
  
  & > span {
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    border: 2px solid #d4af37;
    transition: all 0.3s ease;
  }
  
  &:hover > span {
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.8);
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Image
        src="/static/images/website_icons/logo.png"
        alt="China-Reddit Logo"
        width={60}
        height={60}
        priority
      />
    </LogoContainer>
  )
}

export default Logo