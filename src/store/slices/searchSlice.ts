import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../../types';

const initialState: SearchState = {
  history: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchTerm: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
  },
});

export const { addSearchTerm } = searchSlice.actions;
