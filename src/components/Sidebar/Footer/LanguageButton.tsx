"use client"

import styled from 'styled-components';

const LanguageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  
  label {
    font-weight: 600;
    color: #f8e7b6;
  }
  
  select {
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #d4af37;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.3);
    }
  }
`;

function LanguageButton() {
  return (
    <LanguageForm>
      <label htmlFor="lang">Language:</label>
      <select id="lang" name="lang">
        <option value="english">English</option>
        <option value="russian">Russian</option>
        <option value="chinese">中文</option>
      </select>
    </LanguageForm>
  )
}

export default LanguageButton;