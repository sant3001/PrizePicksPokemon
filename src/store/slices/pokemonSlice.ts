import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export const pokemonSlice = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_POKEMON_API_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonSlice;
