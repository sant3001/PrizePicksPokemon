import { FC } from 'react';
import { useGetPokemonByNameQuery } from '../store';

export const SearchResults: FC = () => {
  const { data } = useGetPokemonByNameQuery('bulbasaur');
  return (
    <div>
      <h2>Search Results</h2>
      {data && (
        <article>
          <h3>{data.name}</h3>
          <img src={data.sprites.front_default} alt={data.name} />
        </article>
      )}
    </div>
  );
};
