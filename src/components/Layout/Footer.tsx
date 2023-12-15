import Logo from '@src/assets/pokemon-logo.png';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

const LogoLink = styled(Link)(() => ({
  display: 'flex',
  width: 160,
}));

export const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LogoContainer>
          <LogoLink to="/" title="Pokédex">
            <Box component={'img'} src={Logo} height={1} width={1} />
          </LogoLink>
        </LogoContainer>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle1'}
          color={(theme) =>
            theme.palette.getContrastText(theme.palette.primary.dark)
          }
          gutterBottom
        >
          &copy; Santiago Bendavid. 2023. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color={(theme) =>
            theme.palette.getContrastText(theme.palette.primary.main)
          }
          component={'p'}
        >
          A great Pokemon trainer needs a reliable Pokedex. This website is a
          Pokemon index that will help you to become the best Pokemon trainer in
          the world.
        </Typography>
      </Grid>
    </Grid>
  );
};
