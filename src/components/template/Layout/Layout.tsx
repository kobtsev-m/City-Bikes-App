import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useActions, useTypedSelector } from 'app/hooks';
import { Body } from './Layout.styles';

export const Layout: FC = ({ children }) => {
  const { theme } = useTypedSelector((state) => state.theme);
  const { toggleTheme } = useActions();
  useEffect(() => {
    toggleTheme();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Body>{children}</Body>
    </ThemeProvider>
  );
};
