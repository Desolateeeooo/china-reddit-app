"use client"

import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  img {
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`;

const QualityIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 10;
`;

interface RedditImageProps {
  src: string;
  alt: string;
  postData: {
    url: string;
    post_hint?: string;
    domain?: string;
    is_video?: boolean;
  };
}

export default function RedditImage({ src, alt, postData }: RedditImageProps) {
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [imageQuality, setImageQuality] = useState<'low' | 'medium' | 'high'>('low');

  // Function to get the best available image URL
  const getBestImageUrl = () => {
    // If it's already a direct image URL, use it
    if (currentSrc.includes('.jpg') || currentSrc.includes('.png') || currentSrc.includes('.jpeg')) {
      return currentSrc;
    }
    
    // For reddit media URLs, try to get higher quality
    if (currentSrc.includes('redditmedia.com') || currentSrc.includes('redd.it')) {
      // Try to get higher resolution by modifying the URL
      if (currentSrc.includes('thumbs.redditmedia.com')) {
        return currentSrc.replace('thumbs.redditmedia.com', 'i.redd.it');
      }
      
      // For preview images, try to get the source
      if (postData.url && (postData.url.includes('.jpg') || postData.url.includes('.png'))) {
        return postData.url;
      }
    }
    
    return currentSrc;
  };

  const bestImageUrl = getBestImageUrl();

  const handleError = () => {
    if (!imageError) {
      setImageError(true);
      // Fall back to the original thumbnail if the better quality fails
      if (bestImageUrl !== src) {
        setCurrentSrc(src);
      }
    }
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    
    // Determine image quality based on dimensions
    if (width >= 800 && height >= 600) {
      setImageQuality('high');
    } else if (width >= 400 && height >= 300) {
      setImageQuality('medium');
    } else {
      setImageQuality('low');
    }
  };

  // Don't render if it's a video or invalid image
  if (postData.is_video || !bestImageUrl || bestImageUrl === 'self' || bestImageUrl === 'default') {
    return null;
  }

  return (
    <ImageContainer>
      {imageQuality !== 'high' && (
        <QualityIndicator>
          Quality: {imageQuality}
        </QualityIndicator>
      )}
      <Image
        src={bestImageUrl}
        alt={alt}
        width={800}
        height={450}
        layout="responsive"
        objectFit="cover"
        onError={handleError}
        onLoad={handleLoad}
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6MeobdC86AACBY4qIftqXgEwqW4L//2Q=="
      />
    </ImageContainer>
  );
}