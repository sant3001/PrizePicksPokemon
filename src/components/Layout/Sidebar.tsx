import { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './SidebarNav';

export interface SidebarProps {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { open, variant, onClose } = props;
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
        },
      }}
    >
      <Box sx={{ height: '100%', padding: 1 }}>
        <SidebarNav />
      </Box>
    </Drawer>
  );
};
