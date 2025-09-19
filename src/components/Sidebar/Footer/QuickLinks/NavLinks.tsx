"use client"

import Link from 'next/link';
import styled from 'styled-components';

const NavLinksContainer = styled.div`
  h3 {
    color: #f8e7b6;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 0;
  margin: 0;
  
  li {
    a {
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      display: inline-block;
      
      &:hover {
        color: #f8e7b6;
        background: rgba(255, 255, 255, 0.1);
        text-decoration: none;
        transform: translateX(5px);
      }
    }
  }
`;

const TermsLink = styled(Link)`
  color: #d4af37 !important;
  font-weight: 600;
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(212, 175, 55, 0.1) !important;
    border-color: #d4af37;
    transform: translateX(5px);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  }
`;

function NavLinks() {
  return (
    <NavLinksContainer>
      <h3>Quick Links:</h3>
      <LinksList>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <TermsLink href="/info_section">
            Terms & Info
          </TermsLink>
        </li>
      </LinksList>
    </NavLinksContainer>
  )
}

export default NavLinks;