import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Logo from '@src/assets/pokemon-logo.png';

export const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={160}
          >
            <Box component={'img'} src={Logo} height={1} width={1} />
          </Box>
        </Box>
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
