import { FC, ReactNode, useEffect } from 'react';
import { useTheme } from 'nextra-theme-docs';

export const SiraUIProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { resolvedTheme, themes } = useTheme();

  useEffect(() => {
    console.debug('SiraUIProvider', 'theme init', resolvedTheme, themes);
    document.documentElement.setAttribute('data-theme', resolvedTheme as string);

    if (resolvedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    // for init exec once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.debug('SiraUIProvider', 'theme changed', resolvedTheme, themes);
    document.documentElement.setAttribute('data-theme', resolvedTheme as string);

    if (resolvedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [resolvedTheme, themes]);

  return <>{children}</>;
};
