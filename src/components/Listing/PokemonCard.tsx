import { FC } from 'react';
import {
  Avatar,
  Box,
  Card as MuiCard,
  CardContent,
  CardMedia as CardMediaMui,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Pokemon } from '@src/types';
import { styled } from '@mui/material/styles';

const LinkWrapper = styled('a')(({ theme }) => ({
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

const CardMedia = styled(CardMediaMui)(({ theme }) => ({
  position: 'relative',
  ...theme.unstable_sx({
    height: { xs: 300, md: 360 },
  }),
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
    <Grid item xs={12} sm={6} md={4}>
      <LinkWrapper href={''}>
        <Card>
          <CardMedia
            image={'https://placehold.co/600x400'}
            title={pokemon.name}
          >
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
          <CardContent sx={{ position: 'relative' }}>
            <Typography variant={'h6'} gutterBottom>
              {pokemon.name}
            </Typography>
            <Typography color="text.secondary">{pokemon.name}</Typography>
          </CardContent>
          <Box flexGrow={1} />
          <Box padding={2} display={'flex'} flexDirection={'column'}>
            <Box marginBottom={2}>
              <Divider />
            </Box>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box display={'flex'} alignItems={'center'}>
                <Avatar
                  // src={pokemon.author.avatar}
                  sx={{ marginRight: 1 }}
                >
                  SB
                </Avatar>
                <Typography color={'text.secondary'}>
                  {/*{pokemon.author.name}*/}
                  SB
                </Typography>
              </Box>
              <Typography color={'text.secondary'}>
                {/*{pokemon.date}*/}
                TODAY
              </Typography>
            </Box>
          </Box>
        </Card>
      </LinkWrapper>
    </Grid>
  );
};
