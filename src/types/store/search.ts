import { Pokemon } from './pokemon';

export interface SearchState {
  current: string;
  history: string[];
}

export interface SearchPokemon {
  pokemon_v2_pokemon: Pokemon[];
  pokemon_v2_pokemon_aggregate: { aggregate: { count: number } };
}
