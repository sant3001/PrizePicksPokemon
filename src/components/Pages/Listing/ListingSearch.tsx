import { FC, FormEvent, useCallback, useRef, useState } from 'react';
import {
  Box,
  Button,
  Card as MuiCard,
  InputAdornment,
  Popper,
  TextField as MuiTextField,
  Typography,
  Fade,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  setSearchTerm,
  useAppDispatch,
  useAppSelector,
  useSearchPokemonQuery,
} from '@src/store';
import { styled } from '@mui/material/styles';
import { Container } from '@src/components';
import HistoryIcon from '@mui/icons-material/History';

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
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.search.history);
  const [showPopper, setShowPopper] = useState(false);
  const [searchText, setSearchText] = useState('');
  const anchorElRef = useRef<HTMLDivElement | null>(null);
  const { refetch, data: searchData } = useSearchPokemonQuery({
    name: searchText,
  });
  const count = searchData?.pokemon_v2_pokemon_aggregate.aggregate.count || 0;

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      anchorElRef.current?.blur();
      dispatch(setSearchTerm(searchText));
      refetch();
      setShowPopper(false);
    },
    [dispatch, refetch, searchText],
  );

  const open = showPopper && history.length > 0;
  const canBeOpen = open && Boolean(anchorElRef.current);
  const id = canBeOpen ? 'spring-popper' : undefined;

  return (
    <Card>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box display="flex" alignItems={'center'}>
          <Box width={1} marginRight={1}>
            <TextField
              inputRef={anchorElRef}
              aria-describedby={id}
              onFocus={() => setShowPopper(true)}
              onBlur={() => setShowPopper(false)}
              variant="outlined"
              size="medium"
              placeholder="Search a Pokémon"
              fullWidth
              onChange={(e) => {
                setSearchText(e.target.value.toLowerCase());
              }}
              value={searchText}
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
              {count} Results
            </TextResultsCount>
          </Box>
          <Box>
            <ButtonSearch
              type="submit"
              variant="contained"
              size="medium"
              fullWidth
            >
              Search
            </ButtonSearch>
          </Box>
        </Box>
      </form>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorElRef.current}
        transition
        sx={{ width: '100vw' }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box>
              <Container
                sx={{
                  py: 0,
                  mt: (theme) => theme.spacing(2),
                }}
              >
                <Paper>
                  <List dense>
                    {history
                      .slice()
                      .reverse()
                      .map((item) => (
                        <ListItem
                          key={`search-history-${item}`}
                          component={Button}
                          onClick={() => {
                            setSearchText(item);
                            dispatch(setSearchTerm(item));
                            refetch();
                            setShowPopper(false);
                          }}
                        >
                          <ListItemIcon>
                            <HistoryIcon />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                  </List>
                </Paper>
              </Container>
            </Box>
          </Fade>
        )}
      </Popper>
    </Card>
  );
};
