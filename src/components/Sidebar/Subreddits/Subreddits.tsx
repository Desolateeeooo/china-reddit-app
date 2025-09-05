"use client"

import SubredList from "./SubredList";
import FiltersList from "./FiltersList";
import styled from 'styled-components';

const SubredditsContainer = styled.div`
  h2 {
    color: #8a1f1f;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #d4af37;
    font-size: 1.5rem;
  }
`;

function Subreddits() {
  return (
    <SubredditsContainer>
      <h2>Subreddits:</h2>
      <SubredList />
      <FiltersList />
    </SubredditsContainer>
  )
}

export default Subreddits;