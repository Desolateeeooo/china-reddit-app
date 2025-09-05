"use client"

import Image from "next/image";
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  background: #d4af37;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8e7b6;
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.7);
  }
  
  & > span {
    display: flex !important;
  }
`;

function SearchIcon() {
  return (
    <IconContainer>
      <Image
        src="/search-icon.svg"
        alt="Search Icon"
        width={24}
        height={24}
      />
    </IconContainer>
  )
}

export default SearchIcon