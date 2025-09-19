import Logo from "@/components/Navigation/Logo";
import QuickLinks from "./QuickLinks/QuickLinks";
import LanguageButton from "./LanguageButton";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #8a1f1f 0%, #c62f2f 100%);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  text-align: center;
  
  h1 {
    color: #f8e7b6;
    margin: 1rem 0;
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    padding: 0 1rem;
  }
  
  h5 {
    margin-top: 1.5rem;
    color: #f8e7b6;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

function Footer() {
  return(
    <FooterContainer>
      <FooterContent>
        <Logo />
        <h1>China-Reddit</h1>
        <p>
          Your gateway to Chinese culture, travel, food, and language
          through the lens of Reddit communities.
        </p>
        <QuickLinks />
        <div id="lang-btn">
          <LanguageButton />
        </div>
        <h5>2025 China-Reddit. All Rights Reserved</h5>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer;