"use client"

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  background: linear-gradient(135deg, #f8f0e0 0%, #f5ebd3 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e8e8e8;
  margin-bottom: 2rem;
`;

const Header = styled.h2`
  color: #8a1f1f;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #d4af37;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsItem = styled.a`
  display: block;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #d4af37;
  text-decoration: none;
  color: #2c2c2c;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-left-color: #8a1f1f;
  }
`;

const NewsTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  line-height: 1.4;
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
`;

const LoadingText = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
`;

const MOCK_NEWS = [
  {
    id: 1,
    title: 'New Archaeological Discoveries in Xi\'an Reveal Ancient Tang Dynasty Treasures',
    source: 'China Daily',
    time: '2 hours ago',
    url: '#'
  },
  {
    id: 2,
    title: 'Shanghai Announces New Cultural Festival Celebrating Regional Diversity',
    source: 'South China Morning Post',
    time: '4 hours ago',
    url: '#'
  },
  {
    id: 3,
    title: 'Chinese Language Learning Apps See Surge in Global Users',
    source: 'Xinhua News',
    time: '6 hours ago',
    url: '#'
  }
];

function ChinaNews() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNews(MOCK_NEWS);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <NewsContainer>
      <Header>
        <span>📰</span>
        China News Headlines
      </Header>
      
      {loading ? (
        <LoadingText>Loading latest news...</LoadingText>
      ) : (
        <NewsList>
          {news.map((item) => (
            <NewsItem key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
              <NewsTitle>{item.title}</NewsTitle>
              <NewsMeta>
                <span>{item.source}</span>
                <span>{item.time}</span>
              </NewsMeta>
            </NewsItem>
          ))}
        </NewsList>
      )}
    </NewsContainer>
  );
}

export default ChinaNews;