"use client"

import { useSearchBar } from "@/app/context/NavigationContext";
import SearchIcon from "./SearchIcon";
import styled from 'styled-components';

const SearchContainer = styled.div`
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

function SearchBar() {

	const {searchTerms, setSearchTerms} = useSearchBar();

	const handleSearchTerms = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerms(target.value)
	}

  return (
    <SearchContainer>
      <SearchInput
        id="search-bar"
        type="text"
        placeholder="Search for posts..."
				value={searchTerms}
				onChange={handleSearchTerms}
      />
      <SearchIcon />
    </SearchContainer>
  );
}

export default SearchBar;