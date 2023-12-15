export interface Reference {
  name: string;
  url: string;
}

export type PokemonList = Reference;

export interface PokemonListResponse<T extends PokemonList = PokemonList> {
  count: number;
  results: T[];
}

export interface Pokemon extends PokemonList {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface PokemonAbility {
  ability: Reference;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonMove {
  move: Reference;
}

export type PokemonSpecies = Reference;

export interface PokemonSprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface PokemonType {
  type: Reference;
}
