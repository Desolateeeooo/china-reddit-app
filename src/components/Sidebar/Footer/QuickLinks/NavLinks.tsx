"use client"

import styled from 'styled-components';

const NavLinksContainer = styled.div`
  h3 {
    color: #f8e7b6;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  
  li {
    a {
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: #f8e7b6;
        text-decoration: underline;
      }
    }
  }
`;

function NavLinks() {
  return (
    <NavLinksContainer>
      <h3>Quick Links:</h3>
      <LinksList>
        <li><a href="#">Home</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </LinksList>
    </NavLinksContainer>
  )
}

export default NavLinks;