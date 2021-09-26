import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Contact, Home } from 'app/screens';
import { useTheme } from 'styled-components/native';

const Stack = createNativeStackNavigator();

export const AppNavigation: FC = () => {
  const theme = useTheme();
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.color.background
    },
    headerTitleStyle: {
      color: theme.color.font
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={screenOptions} />
        <Stack.Screen
          name='Contact'
          component={Contact}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
