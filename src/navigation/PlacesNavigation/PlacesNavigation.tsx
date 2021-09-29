import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import { HomeTab, PlaceDetail, StationOrder } from 'app/screens';

const Stack = createNativeStackNavigator();

export const PlacesNavigation: FC = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.color.background
        },
        headerTitleStyle: {
          color: theme.color.font,
          fontFamily: 'Montserrat_700Bold'
        },
        headerTintColor: theme.color.accent
      }}
    >
      <Stack.Screen name='Home' component={HomeTab} />
      <Stack.Screen name='Detail' component={PlaceDetail} />
      <Stack.Screen name='Station' component={StationOrder} />
    </Stack.Navigator>
  );
};

export type PlacesNavigationParams = {
  Home: undefined;
  Detail: { placeId: string };
  Station: { placeId: string; stationId: string };
};

export type PlacesNavigationProps<
  T extends keyof PlacesNavigationParams = 'Home'
> = NativeStackScreenProps<PlacesNavigationParams, T>;
