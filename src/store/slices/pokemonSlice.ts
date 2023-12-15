import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonListResponse } from '@src/types';

export const pokemonSlice = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_POKEMON_API_URL }),
  endpoints: (builder) => ({
    getPokemonByIdOrName: builder.query<Pokemon, number | string>({
      query: (idOrName) => `pokemon/${idOrName}`,
    }),
    getPokemonList: builder.query<PokemonListResponse, { page?: number }>({
      query: (queryParams) => {
        const { page } = queryParams || {};
        const pageSize = import.meta.env.VITE_LIST_SIZE;
        const params = new URLSearchParams({ limit: pageSize });
        if (page && page > 1) {
          params.append('offset', String((page - 1) * pageSize));
        }
        return `pokemon?${params.toString()}`;
      },
    }),
    searchPokemon: builder.query<
      PokemonListResponse,
      { name: string; page?: number }
    >({
      query: ({ name, page }) => {
        const pageSize = import.meta.env.VITE_LIST_SIZE;
        const params = new URLSearchParams({ name, limit: pageSize });
        if (page && page > 1) {
          params.append('offset', String((page - 1) * pageSize));
        }
        return `pokemon?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetPokemonByIdOrNameQuery, useGetPokemonListQuery } =
  pokemonSlice;
