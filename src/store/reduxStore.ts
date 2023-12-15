import { configureStore } from '@reduxjs/toolkit';
import { searchSlice, pokemonGraphQLSlice } from './slices';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [searchSlice.reducerPath]: searchSlice.reducer,
    [pokemonGraphQLSlice.reducerPath]: pokemonGraphQLSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonGraphQLSlice.middleware);
  },
});

setupListeners(store.dispatch);
