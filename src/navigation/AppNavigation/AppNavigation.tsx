import React, { FC } from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams
} from '@react-navigation/native';

import { SettingsTab } from 'app/screens';
import {
  PlacesNavigation,
  PlacesNavigationParams
} from '../PlacesNavigation/PlacesNavigation';

const Tab = createBottomTabNavigator<AppNavigationParams>();

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: 'none'
          }
        }}
      >
        <Tab.Screen name='Places' component={PlacesNavigation} />
        <Tab.Screen name='Settings' component={SettingsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export type AppNavigationParams = {
  Places: NavigatorScreenParams<PlacesNavigationParams>;
  Settings: undefined;
};

export type AppNavigationProps<
  T extends keyof AppNavigationParams = 'Places'
> = BottomTabScreenProps<AppNavigationParams, T>;
