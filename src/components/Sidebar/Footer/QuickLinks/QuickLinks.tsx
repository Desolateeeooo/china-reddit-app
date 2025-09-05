"use client"

import Contacts from "./Contacts"
import NavLinks from "./NavLinks"
import PlatformSpecificLinks from "./PlatformSpecificLinks"
import styled from 'styled-components';

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

function QuickLinks() {
  return(
    <QuickLinksContainer>
      <Contacts />
      <NavLinks />
      <PlatformSpecificLinks />
    </QuickLinksContainer>
  )
}

export default QuickLinks;