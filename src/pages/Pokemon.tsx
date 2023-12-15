import { FC } from 'react';
import { Container, Layout, Loading, PokemonDetails } from '@src/components';
import { useParams } from 'react-router-dom';
import { useGetPokemonByIdOrNameQuery } from '@src/store';

export const Pokemon: FC = () => {
  const params = useParams<{ id: string }>();
  const id = params.id || '';
  const { data, isLoading, error } = useGetPokemonByIdOrNameQuery(id, {
    skip: !id,
  });

  return (
    <Layout>
      <Container>
        {isLoading && <Loading />}
        {error && <h1>Error</h1>}
        {data && <PokemonDetails pokemon={data} />}
      </Container>
    </Layout>
  );
};
