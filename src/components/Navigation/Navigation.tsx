"use client"

import SearchBar from "./SearchBar/SearchBar"
import Logo from "./Logo"
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #8a1f1f 0%, #c62f2f 100%);
  box-shadow: 0 4px 20px rgba(198, 47, 47, 0.3);
  border-bottom: 3px solid #d4af37;
  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

function Navigation() {
  return (
    <NavigationContainer>
      <Logo />
      <SearchBar />
    </NavigationContainer>
  )
}

export default Navigation