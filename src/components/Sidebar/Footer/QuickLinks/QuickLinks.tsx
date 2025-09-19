import Contacts from "./Contacts"
import NavLinks from "./NavLinks"
import styled from 'styled-components';

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
`;

function QuickLinks() {
  return(
    <QuickLinksContainer>
      <Contacts />
      <NavLinks />
    </QuickLinksContainer>
  )
}

export default QuickLinks;