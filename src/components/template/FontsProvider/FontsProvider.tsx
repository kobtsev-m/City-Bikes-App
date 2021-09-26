import React, { FC } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_100Thin } from '@expo-google-fonts/montserrat';
import {
  OpenSans_400Regular,
  OpenSans_800ExtraBold
} from '@expo-google-fonts/open-sans';

export const FontsProvider: FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    OpenSans_400Regular,
    OpenSans_800ExtraBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <>{children}</>;
};
