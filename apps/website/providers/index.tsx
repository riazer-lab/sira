import { FC, ReactNode } from 'react';
import { SiraUIProvider } from './sira';
import { NextThemeProvider } from './theme';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <NextThemeProvider>
      <SiraUIProvider>{children}</SiraUIProvider>
    </NextThemeProvider>
  );
};
