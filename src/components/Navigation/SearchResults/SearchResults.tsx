"use client"

import { useAppSelector } from '@/hooks/redux';
import PostCard from '../../Post_Card/PostCard';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  margin-top: 2rem;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f0e0;
  border-radius: 8px;
  border-left: 4px solid #d4af37;
`;

const ClearButton = styled.button`
  background: #8a1f1f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c62f2f;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #d4af37;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function SearchResults() {
  const { query, results, isLoading, error } = useAppSelector((state) => state.search);
  
  const handleClearSearch = () => {
    // You would dispatch a clearSearch action here
    console.log('Clear search');
  };

  if (!query) return null;

  if (error) {
    return (
      <ResultsContainer>
        <div style={{ color: '#c62f2f', padding: '1rem', background: '#f8e7b6', borderRadius: '8px' }}>
          Error: {error}
        </div>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <ResultsHeader>
        <div>
          <h3>
            {isLoading && <LoadingSpinner />}
            Search Results for "{query}"
          </h3>
          <p>{results.length} posts found</p>
        </div>
        <ClearButton onClick={handleClearSearch}>
          Clear Search
        </ClearButton>
      </ResultsHeader>
      
      {results.length > 0 ? (
        <div>
          {results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : !isLoading && (
        <p>No results found for "{query}"</p>
      )}
    </ResultsContainer>
  );
}

export default SearchResults;