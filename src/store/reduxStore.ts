import { configureStore } from '@reduxjs/toolkit';
import { searchSlice, pokemonSlice } from './slices';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [pokemonSlice.reducerPath]: pokemonSlice.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonSlice.middleware);
  },
});

setupListeners(store.dispatch);
