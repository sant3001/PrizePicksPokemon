import { FC } from 'react';
import { Pokemon, PokemonSprites } from '@src/types';
import {
  Box,
  Breadcrumbs,
  Link as MuiLink,
  Typography,
  ImageList as MuiImageList,
  ImageListItem,
  Grid,
  Chip,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/material/styles';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const ImageList = styled(MuiImageList)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary.light,
  borderRadius: theme.spacing(2),
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  backgroundColor: theme.palette.info.dark,
}));

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
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6}>
          <ImageList cols={2}>
            {(
              [
                'front_default',
                'back_default',
                'front_shiny',
                'back_shiny',
              ] as (keyof PokemonSprites)[]
            ).map((key) => {
              const value = pokemon.sprites[key];
              if (!value) return null;
              return (
                <ImageListItem key={`pokemon-image-${pokemon.id}-${key}`}>
                  <img
                    src={value}
                    alt={`${pokemon.name} ${key}`}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ py: 4, px: 8 }}>
          {pokemon.is_default && <Chip label="Default" color="secondary" />}
          <Typography variant="h3" sx={{ my: 4, textTransform: 'capitalize' }}>
            {pokemon.name}
          </Typography>
          {pokemon.name !== pokemon.species.name && (
            <Typography
              variant="h5"
              sx={{ mt: -4, mb: 4, textTransform: 'capitalize' }}
            >
              {pokemon.species.name}
            </Typography>
          )}
          {pokemon.abilities.map((ability, i) => (
            <Tooltip
              title={ability.ability.effects?.[0]?.effect}
              key={`pokemon-${pokemon.id}-ability-${i}`}
            >
              <Chip label={ability.ability.name} sx={{ marginRight: 1 }} />
            </Tooltip>
          ))}
          <InfoContainer>
            <Grid container>
              <Grid item xs={6}>
                <Typography>Height</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Weight</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">{pokemon.height / 10} m</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">{pokemon.weight / 10} Kg</Typography>
              </Grid>
              <Grid item xs={12} sx={{ p: 1 }}></Grid>
              <Grid item xs={6}>
                <Tooltip title="The base experience gained for defeating this Pokémon.">
                  <Typography>
                    Base Experience <InfoRoundedIcon fontSize="small" />
                  </Typography>
                </Tooltip>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={6}>
                <Typography color="black">{pokemon.base_experience}</Typography>
              </Grid>
            </Grid>
          </InfoContainer>
          <Typography variant="h5" sx={{ my: 2 }}>
            Type
          </Typography>
          {pokemon.types.map((type, i) => (
            <Chip
              label={type.type.name}
              sx={{
                marginRight: 1,
                backgroundColor: (theme) => theme.palette.info.dark,
              }}
              key={`pokemon-${pokemon.id}-type-${i}`}
            />
          ))}
          <Typography variant="h5" sx={{ my: 2 }}>
            Forms
          </Typography>
          {pokemon.forms.map((form, i) => (
            <Chip
              label={form.form_name || form.name}
              sx={{
                marginRight: 1,
                backgroundColor: (theme) =>
                  form.is_mega
                    ? theme.palette.error.main
                    : theme.palette.warning.dark,
              }}
              key={`pokemon-${pokemon.id}-form-${i}`}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
