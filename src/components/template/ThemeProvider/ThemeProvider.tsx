import React, { FC, useEffect } from 'react';
import { ThemeProvider as Provider } from 'styled-components/native';
import { useAppActions, useAppSelector } from 'app/hooks';

export const ThemeProvider: FC = ({ children }) => {
  const { theme } = useAppSelector((state) => state.theme);
  const { toggleTheme } = useAppActions();

  useEffect(() => {
    toggleTheme();
  }, []);

  return <Provider theme={theme}>{children}</Provider>;
};
