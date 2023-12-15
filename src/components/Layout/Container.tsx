import { PropsWithChildren, JSX } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ContainerWrap = styled(Box)(({ theme }) => ({
  maxWidth: 1236,
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(8, 2),
  [theme.breakpoints.only('sm')]: {
    maxWidth: 720,
    padding: theme.spacing(6, 2),
  },
  [theme.breakpoints.only('xs')]: {
    padding: theme.spacing(4, 2),
  },
}));

export const Container = <TProps extends PropsWithChildren<BoxProps>>(
  props: TProps,
): JSX.Element => {
  const { children, ...rest } = props;
  return <ContainerWrap {...rest}>{children}</ContainerWrap>;
};
