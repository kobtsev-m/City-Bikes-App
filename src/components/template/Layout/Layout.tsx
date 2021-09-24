import React, { FC, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { useAppActions, useAppSelector, useAppFonts } from 'app/hooks';
import { Body } from './Layout.styles';

export const Layout: FC = ({ children }) => {
  const { fontsLoaded } = useAppFonts();
  const { theme } = useAppSelector((state) => state.theme);
  const { toggleTheme } = useAppActions();

  useEffect(() => {
    toggleTheme();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Body>{children}</Body>
    </ThemeProvider>
  );
};
