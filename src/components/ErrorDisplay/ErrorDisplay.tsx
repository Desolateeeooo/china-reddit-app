"use client"

import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #8a1f1f;
  background: linear-gradient(135deg, #f8e7b6 0%, #f5d98d 100%);
  border-radius: 12px;
  margin: 1rem;
  border: 2px solid #d4af37;
  box-shadow: 0 4px 15px rgba(138, 31, 31, 0.15);
`;

const ErrorTitle = styled.h3`
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.3rem;
`;

const ErrorMessage = styled.p`
  margin: 0.5rem 0;
  line-height: 1.5;
`;

const ErrorDetail = styled.small`
  display: block;
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(138, 31, 31, 0.1);
  border-radius: 6px;
  font-family: monospace;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
`;

const RetryButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #8a1f1f 0%, #c62f2f 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(138, 31, 31, 0.3);
  }
`;

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
  subreddit?: string;
}

function ErrorDisplay({ error, onRetry, subreddit = 'china' }: ErrorDisplayProps) {
  return (
    <ErrorContainer>
      <ErrorTitle>
        <span>⚠️</span>
        Unable to Load Content
      </ErrorTitle>
      
      <ErrorMessage>
        {"We're experiencing difficulties loading posts from"} <strong>r/{subreddit}</strong>.
      </ErrorMessage>
      
      <ErrorMessage>
        {"This is a known limitation with Reddit's API on serverless platforms."}
      </ErrorMessage>
      
      <ErrorDetail>
        Technical details: {error}
      </ErrorDetail>
      
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Try Again
        </RetryButton>
      )}
      
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
        <p>In the meantime, you can:</p>
        <ul style={{ textAlign: 'left', display: 'inline-block', margin: '0.5rem 0' }}>
          <li>Try refreshing the page</li>
          <li>Check if Reddit is available in your region</li>
          <li>Try a different subreddit</li>
        </ul>
      </div>
    </ErrorContainer>
  );
}

export default ErrorDisplay;