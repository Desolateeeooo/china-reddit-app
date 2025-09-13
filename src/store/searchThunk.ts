import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSearchResults, setLoading, setError } from './store';

// Async thunk for searching
export const searchPosts = createAsyncThunk(
  'search/searchPosts',
  async (searchParams: { query: string; subreddit?: string; sort?: string; timeFilter?: string }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      
      // Build the API URL with parameters
      const params = new URLSearchParams();
      params.append('q', searchParams.query);
      
      if (searchParams.subreddit && searchParams.subreddit !== 'all') {
        params.append('subreddit', searchParams.subreddit);
      }
      
      if (searchParams.sort) {
        params.append('sort', searchParams.sort);
      }
      
      if (searchParams.timeFilter && searchParams.timeFilter !== 'all') {
        params.append('t', searchParams.timeFilter);
      }
      
      const response = await fetch(`/api/search?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }
      
      const data = await response.json();
      dispatch(setSearchResults(data));
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Search failed';
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  }
);