import { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '@src/assets/pokemon-logo.png';

export const SidebarNav: FC = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={'img'} src={Logo} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            Documentation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
