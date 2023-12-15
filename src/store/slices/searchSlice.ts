import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SearchState } from '@src/types';

const initialState: SearchState = {
  current: '',
  history: JSON.parse(window.localStorage.getItem('searchHistory') || '[]'),
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.trim().toLowerCase();
      state.current = searchTerm;
      if (!searchTerm || state.history.includes(searchTerm)) return;
      state.history.push(searchTerm);
      window.localStorage.setItem(
        'searchHistory',
        JSON.stringify(state.history),
      );
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
