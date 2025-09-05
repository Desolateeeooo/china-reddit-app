"use client"

import Image from 'next/image';
import SecondaryButton from '../Buttons/SecondaryButton';
import UserLogo from './UserLogo';
import styled from 'styled-components';

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

function PostCard() {
  return (
    <PostCardContainer>
      <div>
        <PostHeader>
          <UserLogo />
          <div>
            <p>r/China</p>
            <PostMeta>
              <li>Posted by u/username</li>
              <li>18 hours ago</li>
            </PostMeta>
          </div>
        </PostHeader>
        <PostTitle>Exploring the Beautiful Streets of Beijing - A Photographic Journey</PostTitle>
      </div>
      <div>
        <PostImage>
          <Image 
            src="/beijing_image.jpg" // Remove "public" from path
            alt="Beijing picture"
            width={800}
            height={450}
            layout="responsive"
          />
        </PostImage>
        <PostActions>
          <SecondaryButton icon="upvote">1.2k</SecondaryButton>
          <SecondaryButton icon="comment">243</SecondaryButton>
          <SecondaryButton icon="share">Share</SecondaryButton>
          <SecondaryButton icon="save">Save</SecondaryButton>
        </PostActions>
      </div>
    </PostCardContainer>
  )
}

export default PostCard;