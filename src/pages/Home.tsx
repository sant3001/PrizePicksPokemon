import { useGetPokemonListQuery } from '@src/store';
import { Grid } from '@mui/material';
import {
  Layout,
  Container,
  PokemonCard,
  ListingSearch,
  ListingLoadMore,
} from '@src/components';

export const Home = () => {
  const { data } = useGetPokemonListQuery({});

  return (
    <Layout>
      <Container>
        <ListingSearch />
        <Grid container spacing={4}>
          {data?.results.map((pokemon, i) => (
            <PokemonCard pokemon={pokemon} key={`pokemon-card-${i}`} />
          ))}
          <ListingLoadMore />
        </Grid>
      </Container>
    </Layout>
  );
};
