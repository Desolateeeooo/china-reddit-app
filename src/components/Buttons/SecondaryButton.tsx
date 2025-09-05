import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button<{ icon?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: #f5f5f5;
  color: #555;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: #e8e8e8;
    transform: translateY(-1px);
  }
  
  /* Icon styles */
  ${props => props.icon === 'upvote' && `
    &:hover {
      color: #c62f2f;
    }
    
    &::before {
      content: "▲";
      font-size: 0.8rem;
    }
  `}
  
  ${props => props.icon === 'comment' && `
    &:hover {
      color: #2f4fc6;
    }
    
    &::before {
      content: "💬";
      font-size: 0.8rem;
    }
  `}
  
  ${props => props.icon === 'share' && `
    &:hover {
      color: #2fc65c;
    }
    
    &::before {
      content: "↗";
      font-size: 0.8rem;
    }
  `}
  
  ${props => props.icon === 'save' && `
    &:hover {
      color: #d4af37;
    }
    
    &::before {
      content: "⭐";
      font-size: 0.8rem;
    }
  `}
`;

// Update the component to accept props
interface SecondaryButtonProps {
  icon?: 'upvote' | 'comment' | 'share' | 'save';
  children: React.ReactNode;
}

function SecondaryButton({ icon, children }: SecondaryButtonProps) {
  return (
    <ButtonContainer>
      <StyledButton icon={icon}>{children}</StyledButton>
    </ButtonContainer>
  )
}

export default SecondaryButton;