"use client"

import Image from 'next/image';
import SecondaryButton from '../Buttons/SecondaryButton';
import UserLogo from './UserLogo';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const PostCardContainer = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e8e8e8;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem 0.75rem;
  
  p {
    color: #8a1f1f;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const PostMeta = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  
  li {
    color: #666;
    font-size: 0.8rem;
    
    &::before {
      content: "•";
      margin-right: 0.5rem;
    }
    
    &:first-child::before {
      content: "";
      margin-right: 0;
    }
  }
`;

const PostTitle = styled.h5`
  color: #2c2c2c;
  font-size: 1.25rem;
  margin: 0.5rem 0 0;
  padding: 0 1.5rem 1.25rem;
  line-height: 1.4;
  border-bottom: 1px solid #eee;
`;

const PostImage = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const PostActions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #fafafa;
  border-top: 1px solid #eee;
`;

interface IPostCard {
	id: string;
	title: string;
	author: string;
	subreddit: string;
	thumbnail: string;
	created_utc: number;
	num_comments: number;
	ups: number;
	selftext: string;
}


function PostCard() {
	const [posts, setPosts] = useState<IPostCard[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchPosts = async () => {
		try {
			setLoading(true);
			setError(null);
			const response = await fetch("/api");

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			// Check if we got an error response from our API
			if (data.error) {
				throw new Error(data.error);
			}

			setPosts(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'An error occurred');
			console.error('Error fetching posts:', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
    fetchPosts();
  }, []);

	if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Format relative time (e.g., "5 hours ago")
  const formatTime = (timestamp: number) => {
    const now = new Date().getTime() / 1000;
    const diff = now - timestamp;
    
    if (diff < 3600) {
      return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)} hours ago`;
    } else {
      return `${Math.floor(diff / 86400)} days ago`;
    }
  };

	return (
    <>
      {posts.map((post) => (
        <PostCardContainer key={post.id}>
          <div>
            <PostHeader>
              <UserLogo />
              <div>
                <p>r/{post.subreddit}</p>
                <PostMeta>
                  <li>Posted by u/{post.author}</li>
                  <li>{formatTime(post.created_utc)}</li>
                </PostMeta>
              </div>
            </PostHeader>
            <PostTitle>{post.title}</PostTitle>
          </div>
          <div>
            {post.thumbnail && post.thumbnail.startsWith('http') ? (
              <PostImage>
                <Image 
                  src={post.thumbnail}
                  alt={post.title}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </PostImage>
            ) : (
              <div style={{padding: '1.5rem', background: '#fafafa'}}>
                <p>{post.selftext.substring(0, 200)}...</p>
              </div>
            )}
            <PostActions>
              <SecondaryButton icon="upvote">{post.ups}</SecondaryButton>
              <SecondaryButton icon="comment">{post.num_comments}</SecondaryButton>
              <SecondaryButton icon="share">Share</SecondaryButton>
              <SecondaryButton icon="save">Save</SecondaryButton>
            </PostActions>
          </div>
        </PostCardContainer>
      ))}
    </>
	)
}

export default PostCard;