"use client"

import styled from 'styled-components';

const FiltersContainer = styled.div`
  h2 {
    color: #8a1f1f;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #d4af37;
    font-size: 1.5rem;
  }
`;

const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  label {
    font-weight: 600;
    color: #5a5a5a;
    margin-bottom: 0.5rem;
  }
  
  select {
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: white;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #d4af37;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
    }
  }
`;

function FiltersList() {
  return (
    <FiltersContainer>
      <h2>Filters:</h2>
      <ul>
        <li>
          <FilterForm>
            <label htmlFor="time">Time:</label>
            <select id="time" name="time">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
              <option value="more">{">Year"}</option>
            </select>
          </FilterForm>
        </li>
      </ul>
    </FiltersContainer>
  )
}

export default FiltersList;