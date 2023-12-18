import { createApi } from '@reduxjs/toolkit/query/react';
import { Pokemon, SearchPokemon } from '@src/types';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

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
              order_by: { order: asc }
            ) {
                id
                name
                abilities: pokemon_v2_pokemonabilities {
                   ability: pokemon_v2_ability { name }
                }
                sprites: pokemon_v2_pokemonsprites {
                    sprites
                }
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
    getPokemonById: builder.query<Pokemon, number>({
      query: (id) => ({
        document: /* GraphQL */ `
          query getPokemonByIdOrName($id: Int!) {
            pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
              id
              name
              base_experience
              height
              is_default
              weight
              abilities: pokemon_v2_pokemonabilities {
                ability: pokemon_v2_ability {
                  name
                  is_main_series
                  effects: pokemon_v2_abilityeffecttexts(
                    where: { pokemon_v2_language: { name: { _eq: "en" } } }
                  ) {
                    effect
                  }
                }
                is_hidden
                slot
              }
              species: pokemon_v2_pokemonspecy {
                name
              }
              sprites: pokemon_v2_pokemonsprites {
                sprites
              }
              types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                  name
                }
              }
              forms: pokemon_v2_pokemonforms {
                name
                form_name
                is_mega
              }
            }
          }
        `,
        variables: { id },
      }),
      transformResponse: (baseQueryReturnValue: SearchPokemon): Pokemon => {
        return {
          ...baseQueryReturnValue.pokemon_v2_pokemon[0],
          sprites: JSON.parse(
            // @ts-expect-error GraphQL response is not typed
            baseQueryReturnValue.pokemon_v2_pokemon[0].sprites[0]?.sprites,
          ),
        };
      },
    }),
  }),
});

export const { useSearchPokemonQuery, useGetPokemonByIdQuery } =
  pokemonGraphQLSlice;
