import { FC } from 'react';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const LinkWrapper = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: { marginRight: theme.spacing(2) },
}));

const Link = styled(MuiLink)(({ theme }) => ({
  underline: 'none',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
}));

export const TopNav: FC = () => {
  return (
    <Wrapper>
      <LinkWrapper>
        <Link
          href="https://bulbapedia.bulbagarden.net/wiki/Pokémon_Wiki"
          target="_blank"
        >
          Pokémon Wiki&nbsp;
          <OpenInNewIcon fontSize={'small'} />
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="https://pokeapi.co/docs/v2" target="_blank">
          API&nbsp;
          <OpenInNewIcon fontSize={'small'} />
        </Link>
      </LinkWrapper>
    </Wrapper>
  );
};
