import { FC } from 'react';
import { Container, Layout, Loading, PokemonDetails } from '@src/components';
import { useParams } from 'react-router-dom';
import { useGetPokemonByIdQuery } from '@src/store';

export const Pokemon: FC = () => {
  const params = useParams<{ id: string }>();
  const id = params.id || '';
  const { data, isLoading, error } = useGetPokemonByIdQuery(Number(id), {
    skip: !id,
  });

  return (
    <Layout>
      <Container>
        {isLoading && <Loading />}
        {error ? <h1>Error</h1> : null}
        {data && <PokemonDetails pokemon={data} />}
      </Container>
    </Layout>
  );
};
