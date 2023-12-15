import { FC } from 'react';
import { Pokemon } from '@src/types';
import { Box, Breadcrumbs, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface PokemonDetailsProps {
  pokemon: Pokemon;
}

export const PokemonDetails: FC<PokemonDetailsProps> = (props) => {
  const { pokemon } = props;

  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <MuiLink component={Link} underline="hover" color="inherit" to="/">
          Home
        </MuiLink>
        <Typography color="text.primary" sx={{ textTransform: 'capitalize' }}>
          {pokemon.name}
        </Typography>
      </Breadcrumbs>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </Box>
  );
};
