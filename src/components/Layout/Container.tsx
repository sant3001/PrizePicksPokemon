import { PropsWithChildren, JSX } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Container = <TProps extends PropsWithChildren<BoxProps>>(
  props: TProps,
): JSX.Element => {
  const { children, ...rest } = props;
  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin={'0 auto'}
      paddingX={2}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
      {...rest}
    >
      {children}
    </Box>
  );
};
