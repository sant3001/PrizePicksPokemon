import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonListResponse, QueryReturnValue } from '@src/types';

export const pokemonSlice = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_POKEMON_API_URL }),
  endpoints: (builder) => ({
    getPokemonByIdOrName: builder.query<Pokemon, number | string>({
      query: (idOrName) => `pokemon/${idOrName}`,
    }),
    getPokemonList: builder.query<PokemonListResponse<Pokemon>, unknown>({
      queryFn: async (_, __, ___, baseQuery) => {
        const pageSize = import.meta.env.VITE_LIST_SIZE;
        const params = new URLSearchParams({ limit: pageSize });
        const url = `pokemon?${params.toString()}`;
        const response = (await baseQuery(
          url,
        )) as QueryReturnValue<PokemonListResponse>;
        const promises =
          response.data?.results.map(
            async (pokemon): Promise<Pokemon | undefined> => {
              const result = (await baseQuery(
                pokemon.url,
              )) as QueryReturnValue<Pokemon>;
              if (!result || !result.data || result.error) return undefined;
              return { ...result.data, url: pokemon.url };
            },
          ) || [];
        const pokemonList = (await Promise.all(promises)).filter(
          Boolean,
        ) as Pokemon[];
        return {
          data: { count: response.data?.count || 0, results: pokemonList },
        };
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
