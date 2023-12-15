import { FC, PropsWithChildren, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Container } from './Container';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
import { TopNav } from './TopNav';

const BoxWrapperSvg = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(6),
}));

const DividerPathSvg = styled('svg')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  zIndex: 2,
  width: 'auto',
}));

export interface LayoutProps {
  bgcolor?: string;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { children, bgcolor = 'transparent' } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <TopNav />
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <TopBar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <main>{children}</main>
      <BoxWrapperSvg>
        <DividerPathSvg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
        >
          <path
            fill={theme.palette.primary.dark}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          />
        </DividerPathSvg>
      </BoxWrapperSvg>
      <Box sx={{ backgroundColor: theme.palette.primary.dark }}>
        <Container paddingY={4}>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
