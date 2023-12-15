import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, SearchPokemon } from '@src/types';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const pokemonSlice = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_POKEMON_API_URL }),
  endpoints: (builder) => ({
    getPokemonByIdOrName: builder.query<Pokemon, number | string>({
      query: (idOrName) => `pokemon/${idOrName}`,
    }),
  }),
});

export const pokemonGraphQLSlice = createApi({
  reducerPath: 'pokemonGraphQL',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_POKEMON_GRAPHQL_API_URL,
  }),
  endpoints: (builder) => ({
    searchPokemon: builder.query<SearchPokemon, unknown>({
      query: (variables: { name: string; page?: number }) => ({
        document: /* GraphQL */ `
          query searchPokemon($name: String!) {
            pokemon_v2_pokemon(
              where: {name: { _regex: $name }}
              limit: ${import.meta.env.VITE_LIST_SIZE}
              offset: ${
                variables.page && variables.page > 1
                  ? (variables.page - 1) * import.meta.env.VITE_LIST_SIZE
                  : 0
              }
            ) {
                id
                name
                base_experience
                height
                is_default
                order
                weight
                abilities: pokemon_v2_pokemonabilities {
                   ability: pokemon_v2_ability { name }
                   is_hidden 
                   slot
                }
                moves: pokemon_v2_pokemonmoves { move: pokemon_v2_move { name } }
                species: pokemon_v2_pokemonspecy { name }
                sprites: pokemon_v2_pokemonsprites { sprites }
                types: pokemon_v2_pokemontypes { type: pokemon_v2_type { name } }
            }
            pokemon_v2_pokemon_aggregate(where: { name: { _regex: $name } }) {
              aggregate {
                count
              }
            }
          }
        `,
        variables,
      }),
      transformResponse: (
        baseQueryReturnValue: SearchPokemon,
      ): SearchPokemon => {
        return {
          ...baseQueryReturnValue,
          pokemon_v2_pokemon: baseQueryReturnValue.pokemon_v2_pokemon.map(
            (pokemon) => ({
              ...pokemon,
              // @ts-expect-error GraphQL response is not typed
              sprites: JSON.parse(pokemon.sprites[0]?.sprites),
            }),
          ),
        };
      },
    }),
  }),
});

export const { useGetPokemonByIdOrNameQuery } = pokemonSlice;
export const { useSearchPokemonQuery } = pokemonGraphQLSlice;
