"use client"

import Image from "next/image"
import styled from 'styled-components';

const UserLogoContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #d4af37;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #8a1f1f;
    box-shadow: 0 3px 12px rgba(138, 31, 31, 0.2);
    transform: scale(1.05);
  }
`;

function UserLogo() {
  return(
    <UserLogoContainer>
      <Image 
        src="/user_logo_1.svg" // Remove "public" from path
        alt="User Logo icon"
        width={45}
        height={45}
      />
    </UserLogoContainer>
  )
}

export default UserLogo