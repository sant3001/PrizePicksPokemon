import { useAppSelector, useSearchPokemonQuery } from '@src/store';
import { Grid } from '@mui/material';
import {
  Layout,
  Container,
  PokemonCard,
  ListingSearch,
  ListingLoadMore,
  Loading,
} from '@src/components';
import { useMemo } from 'react';

export const Home = () => {
  const currentSearch = useAppSelector((state) => state.search.current);
  const { data: searchData, isLoading } = useSearchPokemonQuery({
    name: currentSearch,
  });

  const results = useMemo(
    () => (searchData ? searchData.pokemon_v2_pokemon : []),
    [searchData],
  );

  return (
    <Layout>
      <Container>
        <ListingSearch />
        <Grid container spacing={4}>
          {results.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={`pokemon-card-${pokemon.id}`} />
          ))}
          {isLoading ? (
            <Grid item xs={12}>
              <Loading />
            </Grid>
          ) : (
            <>
              {!currentSearch &&
                (searchData?.pokemon_v2_pokemon_aggregate.aggregate.count ||
                  0) > import.meta.env.VITE_LIST_SIZE && <ListingLoadMore />}
            </>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};
