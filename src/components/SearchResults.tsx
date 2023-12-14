import type { FC } from 'react';
import { useGetPokemonByIdOrNameQuery } from '@src/store';

export const SearchResults: FC = () => {
  const { data } = useGetPokemonByIdOrNameQuery(35);
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
