"use client"

import styled from 'styled-components';

const SubredditList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  
  li {
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f8f4e9;
    
    &:hover {
      background: #f8e7b6;
      transform: translateX(5px);
    }
    
    &::before {
      content: "•";
      color: #c62f2f;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

function SubredList() {
  return (
    <SubredditList>
      <li>r/China</li>
      <li>r/Chinese</li>
      <li>r/ChinaPics</li>
      <li>r/Shanghai</li>
    </SubredditList>
  )
}

export default SubredList;