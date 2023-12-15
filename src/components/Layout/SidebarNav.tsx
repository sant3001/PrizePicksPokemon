import { FC } from 'react';
import Box from '@mui/material/Box';
import Logo from '@src/assets/pokemon-logo.png';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)(({ theme }) => ({
  display: 'flex',
  width: 100,
  [theme.breakpoints.up('md')]: {
    width: 120,
  },
}));

export const SidebarNav: FC = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <LinkWrapper to="/" title="Pokédex">
          <Box component={'img'} src={Logo} height={1} width={1} />
        </LinkWrapper>
        {/*  TODO: Add navigation items */}
      </Box>
    </Box>
  );
};
