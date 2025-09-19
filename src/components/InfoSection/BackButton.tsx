"use client"

import Link from 'next/link';
import styled from 'styled-components';

const BackButtonContainer = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #8a1f1f 0%, #c62f2f 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(138, 31, 31, 0.4);
    border-color: #d4af37;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  ${BackButtonContainer}:hover & {
    transform: translateX(-3px);
  }
`;

function BackButton() {
  return (
    <BackButtonContainer href="/">
      <ArrowIcon>←</ArrowIcon>
      Back to ChinaTalk
    </BackButtonContainer>
  );
}

export default BackButton;