import { registerRootComponent } from 'expo';
import React, { FC } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'app/store';
import { ThemeProvider, FontsProvider } from 'app/components/template';
import { AppNavigation } from 'app/navigation';

const Index: FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <FontsProvider>
          <AppNavigation />
        </FontsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

registerRootComponent(Index);
