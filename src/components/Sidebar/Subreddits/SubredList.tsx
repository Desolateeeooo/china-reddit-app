"use client"

import styled from 'styled-components';
import { useSubreddit } from '../../../app/context/SubredditContext';

const SubredditList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  padding: 0;
`;

const SubredditButton = styled.button<{ $isActive: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.$isActive ? '#f8e7b6' : '#f8f4e9'};
  border: 2px solid ${props => props.$isActive ? '#d4af37' : 'transparent'};
  box-shadow: ${props => props.$isActive ? '0 2px 8px rgba(212, 175, 55, 0.3)' : 'none'};
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: #f8e7b6;
    transform: translateX(5px);
  }
  
  &::before {
    content: "•";
    color: ${props => props.$isActive ? '#8a1f1f' : '#c62f2f'};
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: ${props => props.$isActive ? '#8a1f1f' : 'transparent'};
    transition: all 0.3s ease;
  }
  
  span {
    flex: 1;
    text-align: left;
    font-weight: ${props => props.$isActive ? '600' : '400'};
    color: ${props => props.$isActive ? '#8a1f1f' : '#333'};
  }
  
  .indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.$isActive ? '#8a1f1f' : 'transparent'};
    transition: all 0.3s ease;
  }
`;

// Define the subreddits array for easier management
const SUBREDDITS = [
  { id: 'china', name: 'r/China' },
  { id: 'chinese', name: 'r/Chinese' },
  { id: 'chinapics', name: 'r/ChinaPics' },
  { id: 'shanghai', name: 'r/Shanghai' },
  { id: 'beijing', name: 'r/Beijing' },
  { id: 'chinesefood', name: 'r/ChineseFood' },
  { id: 'chineselanguage', name: 'r/ChineseLanguage' },
  { id: 'travelchina', name: 'r/TravelChina' }
];

// interface SubredListProps {
//   onSubredditChange?: (subreddit: string) => void;
//   initialActive?: string;
// }

function SubredList() {
  const { selectedSubreddit, setSelectedSubreddit } = useSubreddit();

  const handleSubredditClick = (subredditId: string) => {
    setSelectedSubreddit(subredditId);
  };

  return (
    <SubredditList>
      {SUBREDDITS.map((subreddit) => (
        <li key={subreddit.id}>
          <SubredditButton
            $isActive={selectedSubreddit === subreddit.id}
            onClick={() => handleSubredditClick(subreddit.id)}
            aria-selected={selectedSubreddit === subreddit.id}
          >
            <span>{subreddit.name}</span>
            <div className="indicator" />
          </SubredditButton>
        </li>
      ))}
    </SubredditList>
  );
}

export default SubredList;
