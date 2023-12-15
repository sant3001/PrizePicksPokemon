export interface NamedAPIResource {
  name: string;
}

export interface Pokemon {
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
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonMove {
  move: NamedAPIResource;
}

export type PokemonSpecies = NamedAPIResource;

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
  type: NamedAPIResource;
}
