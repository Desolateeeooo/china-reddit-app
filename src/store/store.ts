import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state structure
export interface SearchState {
  query: string;
  filters: {
    timeFilter: string;
    sort: string;
    subreddit: string;
  };
  results: any[];
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  search: SearchState;
}

const initialSearchState: SearchState = {
  query: '',
  filters: {
    timeFilter: 'all',
    sort: 'relevance',
    subreddit: 'all'
  },
  results: [],
  isLoading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setTimeFilter: (state, action: PayloadAction<string>) => {
      state.filters.timeFilter = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.filters.sort = action.payload;
    },
    setSubredditFilter: (state, action: PayloadAction<string>) => {
      state.filters.subreddit = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.results = [];
      state.error = null;
    }
  }
});

export const {
  setSearchQuery,
  setTimeFilter,
  setSort,
  setSubredditFilter,
  setSearchResults,
  setLoading,
  setError,
  clearSearch
} = searchSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;