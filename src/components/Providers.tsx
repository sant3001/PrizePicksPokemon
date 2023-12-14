import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@src/store';
import type { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
