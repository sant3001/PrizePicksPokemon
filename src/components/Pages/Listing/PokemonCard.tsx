import { FC } from 'react';
import {
  Box,
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip,
  Divider,
  Grid,
  Typography,
  Button,
  Icon,
} from '@mui/material';
import { Pokemon } from '@src/types';
import { styled } from '@mui/material/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)(({ theme }) => ({
  display: 'block',
  width: 'auto',
  height: '100%',
  textDecoration: 'none',
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: `translateY(-${theme.spacing(1 / 2)})`,
  },
}));

const Card = styled(MuiCard)(({ theme }) => ({
  width: 'auto',
  height: '100%',
  boxShadow: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: 'none',
}));

const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.secondary.light,
  height: 200,
  [theme.breakpoints.up('md')]: {
    height: 260,
  },
}));

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(1),
}));

const CardChips = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

const CardActions = styled(MuiCardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 0,
  paddingTop: theme.spacing(1),
}));

const BoxSvg = styled('svg')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  color: theme.palette.background.paper,
  transform: 'scale(2)',
  height: 'auto',
  width: 'auto',
  transformOrigin: 'top center',
}));

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonCardProps> = (props) => {
  const { pokemon } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <LinkWrapper to={`pokemon/${pokemon.id}`}>
        <Card>
          <CardMedia image={pokemon.sprites.front_default} title={pokemon.name}>
            <BoxSvg
              viewBox="0 0 2880 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                fill="currentColor"
              />
            </BoxSvg>
          </CardMedia>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 'bolder', textTransform: 'uppercase' }}
            >
              {pokemon.name}
            </Typography>
            <CardChips>
              {pokemon.abilities.map((ability, i) => (
                <Chip
                  key={`pokemon-${pokemon.id}-ability-${i}`}
                  label={ability.ability.name}
                  sx={{ marginRight: 1 }}
                />
              ))}
            </CardChips>
          </CardContent>
          <Box flexGrow={1} />
          <Divider />
          <CardActions disableSpacing>
            <Button
              variant="outlined"
              size={'small'}
              startIcon={
                <Icon>
                  <ArrowRightIcon />
                </Icon>
              }
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </LinkWrapper>
    </Grid>
  );
};
