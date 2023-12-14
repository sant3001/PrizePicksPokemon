import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from '@src/types';

export const pokemonSlice = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_POKEMON_API_URL }),
  endpoints: (builder) => ({
    getPokemonByIdOrName: builder.query<Pokemon, number | string>({
      query: (idOrName) => `pokemon/${idOrName}`,
    }),
  }),
});

export const { useGetPokemonByIdOrNameQuery } = pokemonSlice;
