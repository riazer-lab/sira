import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const NextThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
