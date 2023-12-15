import { FC } from 'react';
import {
  Box,
  Button,
  Card as MuiCard,
  InputAdornment,
  TextField as MuiTextField,
  Typography,
} from '@mui/material';
import { useGetPokemonListQuery } from '@src/store';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 'auto',
  boxShadow: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  height: 54,
  '& .MuiOutlinedInput-notchedOutline': {
    border: '0 !important',
  },
  color: theme.palette.primary.main,
}));

const InputSvg = styled('svg')(({ theme }) => ({
  width: 24,
  height: 24,
  stroke: 'currentColor',
  fill: 'none',
  color: theme.palette.primary.main,
}));

const TextResultsCount = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ButtonSearch = styled(Button)(() => ({
  height: 54,
  minWidth: 100,
  whiteSpace: 'nowrap',
}));

export const ListingSearch: FC = () => {
  const { data } = useGetPokemonListQuery({});

  return (
    <Card>
      <form noValidate autoComplete="off">
        <Box display="flex" alignItems={'center'}>
          <Box width={1} marginRight={1}>
            <TextField
              variant="outlined"
              size="medium"
              placeholder="Search a Pokémon"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputSvg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </InputSvg>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box marginRight={2}>
            <TextResultsCount variant={'subtitle2'}>
              {data?.count || 0} Results
            </TextResultsCount>
          </Box>
          <Box>
            <ButtonSearch variant="contained" size="medium" fullWidth>
              Search
            </ButtonSearch>
          </Box>
        </Box>
      </form>
    </Card>
  );
};
