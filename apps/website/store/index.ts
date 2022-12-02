import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import produce from "immer";

interface State {
  colorScheme: "light" | "dark";
  toggleColorMode: (isDark: boolean) => void;
}

export const useAppStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        colorScheme: "light",
        toggleColorMode: (isDark) =>
          set(
            produce((state: State) => {
              state.colorScheme = isDark ? "dark" : "light";
            })
          ),
      }),
      {
        name: "sira-ui-store",
        version: 1,
      }
    )
  )
);
