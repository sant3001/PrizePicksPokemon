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
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}
