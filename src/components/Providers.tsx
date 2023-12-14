import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';
import { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
