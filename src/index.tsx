import { registerRootComponent } from 'expo';
import React, { FC } from 'react';
import Constants from 'expo-constants';
import { Provider as StoreProvider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';
import { store } from 'app/store';
import { ThemeProvider, FontsProvider } from 'app/components/template';
import { AppNavigation } from 'app/navigation';

const publishableKey = Constants?.manifest?.stripe?.publishableKey;

const Index: FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <FontsProvider>
          <StripeProvider publishableKey={publishableKey}>
            <AppNavigation />
          </StripeProvider>
        </FontsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

registerRootComponent(Index);
