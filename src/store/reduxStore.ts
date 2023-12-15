import { configureStore } from '@reduxjs/toolkit';
import { searchSlice, pokemonSlice, pokemonGraphQLSlice } from './slices';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [pokemonSlice.reducerPath]: pokemonSlice.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
    [pokemonGraphQLSlice.reducerPath]: pokemonGraphQLSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      pokemonSlice.middleware,
      pokemonGraphQLSlice.middleware,
    );
  },
});

setupListeners(store.dispatch);
