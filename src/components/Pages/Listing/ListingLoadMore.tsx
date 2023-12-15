import { FC } from 'react';
import { Button as ButtonMui, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Button = styled(ButtonMui)(() => ({
  height: 54,
  maxWidth: 400,
  justifyContent: 'space-between',
}));

const BoxSvg = styled('svg')(() => ({
  width: 24,
  height: 24,
  stroke: 'currentColor',
  fill: 'none',
}));

export const ListingLoadMore: FC = () => {
  return (
    <Grid item container justifyContent={'center'} xs={12}>
      <Button
        fullWidth
        variant={'outlined'}
        size={'large'}
        endIcon={
          <BoxSvg viewBox={'0 0 24 24'} xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </BoxSvg>
        }
      >
        Load more
      </Button>
    </Grid>
  );
};
