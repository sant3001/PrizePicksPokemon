import { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@src/assets/pokemon-logo.png';

const BoxWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
});

const LinkWrapper = styled('a')(({ theme }) => ({
  display: 'flex',
  ...theme.unstable_sx({
    width: { xs: 100, md: 160 },
  }),
}));

const MenuIconWrapper = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  ...theme.unstable_sx({
    display: { xs: 'flex', md: 'none' },
  }),
}));

const ButtonIcon = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  minWidth: 'auto',
  padding: theme.spacing(1),
  borderColor: alpha(theme.palette.divider, 0.2),
}));

export interface TopBarProps {
  onSidebarOpen: () => void;
}

export const TopBar: FC<TopBarProps> = (props) => {
  const { onSidebarOpen } = props;
  return (
    <BoxWrapper>
      <LinkWrapper href="/" title="Pokedex">
        <Box component={'img'} src={Logo} height={1} width={1} />
      </LinkWrapper>
      <MenuIconWrapper>
        <ButtonIcon
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
        >
          <MenuIcon />
        </ButtonIcon>
      </MenuIconWrapper>
    </BoxWrapper>
  );
};
