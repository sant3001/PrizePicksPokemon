import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const Loading: FC = () => {
  return (
    <Wrapper>
      <CircularProgress size={80} color="secondary" />
    </Wrapper>
  );
};
