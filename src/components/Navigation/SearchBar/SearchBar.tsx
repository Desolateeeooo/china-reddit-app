"use client"

import SearchIcon from "./SearchIcon";
import styled from 'styled-components';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {setSearchQuery} from "../../../store/store"
import {searchPosts } from '../../../store/searchThunk';

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:focus-within {
    background: rgba(255, 255, 255, 0.25);
    border-color: #d4af37;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1rem;
  width: 300px;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SearchButton = styled.button`
  background: #d4af37;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: #8a1f1f;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f8e7b6;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

function SearchBar() {
  const [localQuery, setLocalQuery] = useState('');
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.search);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (localQuery.trim()) {
      // Update Redux state
      dispatch(setSearchQuery(localQuery));
      
      // Perform search
      dispatch(searchPosts({ 
        query: localQuery,
        // You can add other filters here from your state
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
    
    // Optional: Implement debounced search as user types
    // For now, we'll just update the local state
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        id="search-bar"
        type="text"
        placeholder="Search China-related posts..."
        value={localQuery}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <SearchButton type="submit" disabled={isLoading}>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
}

export default SearchBar;