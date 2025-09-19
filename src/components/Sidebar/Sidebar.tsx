"use client"

import Subreddits from "./Subreddits/Subreddits";
import Footer from "./Footer/Footer";
import styled from 'styled-components';
import ChinaNews from './ChinaNews/ChinaNews';

const SidebarContainer = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f8f0e0);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 968px) {
    order: -1; /* Move sidebar above main content on mobile */
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Subreddits />
			<ChinaNews />
      <Footer />
    </SidebarContainer>
  )
}

export default Sidebar;